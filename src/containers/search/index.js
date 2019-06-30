import React, { useContext, useState, useEffect } from "react";
import "./index.scss";
import { Sections } from "../../components/common";
import { MyContext } from "../../store";
import axios from "axios";
// 검색화면 입니다.

export default function Search(props) {
  // Context API 불러옴
  const context = useContext(MyContext);
  // common - 현재 데이터 상태 기록
  const [common, setCommon] = useState({
    loading: false,
    nodata: false
  });
  // userinfo - 불러온 소환사 정보 기록
  const [userInfo, setUserInfo] = useState({
    name: props.match.params.username,
    summonerLevel: "..."
  });
  // live - 현재 소환사가 게임중인지 기록
  const [live, setLive] = useState(false);
  // leagueinfo - 소환사의 랭크 정보를 기록
  const [leagueInfo, setLeagueInfo] = useState();
  let myLeague = null;

  // 이름으로 소환사 데이터 불러오기
  useEffect(() => {
    // context에 저장되어있는 링크와 키값을 불러와 통합 관리합니다.
    // async를 이용해 비동기 서버 통신을 진행합니다.
    // 먼저 이름을 가져오고 > 현재 게임중인지 / 리그 정보를 동시에 가져옵니다.
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
        // 콜백 - 현재 게임중 확인
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
        // 콜백 - 리그 정보 확인
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
    // myleague에 값을 담고 승률을 계산합니다.
    // 이때 소환사가 없을수 있으니 예외처리를 해줍니다.
    myLeague = leagueInfo.data[0];
    myLeague.pov = myLeague.wins / (myLeague.wins + myLeague.losses);
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
