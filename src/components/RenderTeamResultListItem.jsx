import "../styles/MainResults.css"
import useStore from "../hooks/useStore"

export default function RenderTeamResultListItem({result}){
  let teams = useStore(store => store.teams)
  let homeTeam = teams.find(team => team.id === result.homeTeam)
  let awayTeam = teams.find(team => team.id === result.awayTeam)

  return <>
    <li className="team-result-li">
      <span className="fixture-list-item-span fixture-list-item-place">{result.matchDay}</span>
      <span className="fixture-list-item-span ">{homeTeam.name}</span>
      <span className="fixture-list-item-span ">{result.homeTeamScore}</span>
      <span className="fixture-list-item-span ">-</span>
      <span className="fixture-list-item-span ">{result.awayTeamScore}</span>
      <span className="fixture-list-item-span ">{awayTeam.name}</span>
    </li>
  </>
}

