import React, { useContext, useState, useEffect } from "react";
import "./index.scss";
import { Sections } from "../../components/common";
import { MyContext } from "../../store";
import axios from "axios";

export default function Search(props) {
  // Context API 불러옴
  const context = useContext(MyContext);
  const [common, setCommon] = useState({
    loading: false,
    nodata: false
  });
  const [userInfo, setUserInfo] = useState({
    name: props.match.params.username,
    summonerLevel: "..."
  });
  const [live, setLive] = useState(false);
  const [leagueInfo, setLeagueInfo] = useState();
  let myLeague = null;

  // 이름으로 소환사 데이터 불러오기
  useEffect(() => {
    const getData = async () => {
      let sumid = 0;
      if (context.URL) {
        await axios
          .get(
            `${context.URL}summoner/v4/summoners/by-name/${
              props.match.params.username
            }${context.RiotKey}`
          )
          .then(res => {
            setUserInfo(res.data);
            sumid = res.data.id;
          })
          .catch(err => {
            if (err.response.status === 404) {
              setUserInfo({
                summonerLevel: "존재하지 않는 소환사 이름"
              });
            } else {
              setCommon({
                loading: false,
                nodata: true
              });
              setUserInfo({
                summonerLevel: "서버 연결 실패"
              });
            }
          });
        // 첫번째 콜백 - 현재 게임중 확인
        axios
          .get(
            `${context.URL}spectator/v4/active-games/by-summoner/${sumid}${
              context.RiotKey
            }`
          )
          .then(res => {
            setLive(res);
          })
          .catch(err => {
            setLive(err.response);
          });
        // 첫번째 콜백 - 리그 정보 확인
        axios
          .get(
            `${context.URL}league/v4/entries/by-summoner/${sumid}${
              context.RiotKey
            }`
          )
          .then(res => {
            setCommon({
              loading: true,
              nodata: false
            });
            setLeagueInfo(res);
          })
          .catch(err => {
            setLeagueInfo(err.response);
          });
      }
    };
    getData();
  }, [context, props]);

  try {
    myLeague = leagueInfo.data[0];
    myLeague.pov = myLeague.wins / (myLeague.wins + myLeague.losses);
    console.log(userInfo);
  } catch (err) {}

  return (
    <>
      <div className="search_bg">
        <div className="search_id">{userInfo.name}</div>
        <div className="search_lv">[ {userInfo.summonerLevel} ]</div>
      </div>
      {common.loading ? (
        common.nodata ? (
          <></>
        ) : (
          <>
            {live.status === 200 ? (
              <Sections
                title="현재"
                subtitle="now"
                title_right="게임중"
                subtitle_right="playing"
              />
            ) : null}
            {myLeague ? (
              <>
                <Sections
                  title="리그"
                  subtitle="league"
                  title_right={`${myLeague.tier} ${myLeague.rank}`}
                  subtitle_right={`${myLeague.leaguePoints} Point`}
                />
                <Sections
                  title="승/패"
                  subtitle="win/lose"
                  title_right={`${myLeague.wins} 승 / ${myLeague.losses} 패`}
                  subtitle_right={`${(myLeague.pov * 100).toFixed(1)} %`}
                />
              </>
            ) : (
              <Sections
                title="리그"
                subtitle="league"
                title_right="아직 리그가 없습니다"
                subtitle_right="no search"
              />
            )}
          </>
        )
      ) : (
        <>
          <Sections
            className="section_loading"
            title="불러오는중"
            subtitle="loading"
          />
        </>
      )}
    </>
  );
}
