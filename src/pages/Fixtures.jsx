import "../styles/Fixtures.css"
import useStore from "../hooks/useStore"
import RenderFixtureListItem from"../components/RenderFixtureListItem"


export default function Fixtures(){
  let teams = useStore(store => store.teams)
  let leagueStartDate = useStore(store => store.leagueStartDate)

  if (teams === null || leagueStartDate === null) return <></>
  let homeTeams = teams.slice(0, teams.length/2)
  let awayTeams = teams.slice(teams.length/2,teams.length) 
  let fixturesList = []
  let matchDate = null
  let matchDateText = null

  for (let matchDay = 1; matchDay < teams.length * 2 - 1 ; matchDay++){
    for (let match = 0; match < teams.length/2; match++){
      matchDate = Math.floor(new Date(leagueStartDate))+ (matchDay - 1) * 604800000
      matchDate = new Date(matchDate)
      matchDateText = " - "+ matchDate.toString().slice(0,15) 
      if (matchDay < teams.length)
        if(matchDay%2) 
          fixturesList = [...fixturesList, {matchDay: matchDay+matchDateText, homeTeam: homeTeams[match], awayTeam: awayTeams[match]}]
        else
          fixturesList = [...fixturesList, {matchDay: matchDay+matchDateText, awayTeam: homeTeams[match], homeTeam: awayTeams[match]}]
      else
        if(matchDay%2)
          fixturesList = [...fixturesList, {matchDay: matchDay+matchDateText, awayTeam: awayTeams[match], homeTeam: homeTeams[match]}]
        else
          fixturesList = [...fixturesList, {matchDay: matchDay+matchDateText, homeTeam: awayTeams[match], awayTeam: homeTeams[match]}]
    }
    awayTeams.push(homeTeams.pop())
    homeTeams.unshift(awayTeams.shift())
  }

  return <>
    <ul className="main-fixture-list">
      <li className="fixture-heading-li">
        <span className="fixtures-list-item-span fixture-list-item-place">Match-Day</span>
        <span className="fixtures-list-item-span ">Home-Team</span>
        <span className="fixtures-list-item-span "> vs </span>
        <span className="fixtures-list-item-span ">Away-Team</span>
      </li>
      {fixturesList.map(fixture => <RenderFixtureListItem fixture={fixture}/>)}
    </ul></>
}

/*
if (matchDay < teams.length)
fixturesList = [...fixturesList, {matchDay: matchDay+matchDateText, homeTeam: homeTeams[match], awayTeam: awayTeams[match]}]
else
fixturesList = [...fixturesList, {matchDay: matchDay+matchDateText, awayTeam: awayTeams[match], homeTeam: homeTeams[match]}]
*/