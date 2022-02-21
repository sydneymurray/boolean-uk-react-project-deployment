import "../styles/MainResults.css"
import useStore from "../hooks/useStore"

export default function RenderTeamResultListItem({result, index}){
  let teams = useStore(store => store.teams)
  let homeTeam = teams.find(team => team.id === result.homeTeam)
  let awayTeam = teams.find(team => team.id === result.awayTeam)

  return <>
    <li className="team-result-li">
      <span className="fixture-list-item-span fixture-list-item-place match-day">{result.matchDay}</span>
      <span className="fixture-list-item-span home-team">{homeTeam.name}</span>
      <span className="fixture-list-item-span home-goals">{result.homeTeamScore}</span>
      <span className="fixture-list-item-span result-seperator">-</span>
      <span className="fixture-list-item-span away-team">{result.awayTeamScore}</span>
      <span className="fixture-list-item-span away-goals">{awayTeam.name}</span>
    </li>
  </>
}

