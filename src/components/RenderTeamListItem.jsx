import {Link} from "react-router-dom"

export default function RenderTeamListItem({team, index}){
  return <>
    <Link key={team.id} className="no-styling" to={`/TeamInfo/${team.id}`}>
      <li key={team.id} className="team-li">
        <span className="list-item-span place">{index+1}.</span>
        <span className="list-item-span team-name">{team.name}</span>
        <span className="list-item-span spacer"></span>
        <span className="list-item-span ">{team.gamesPlayed}</span>
        <span className="list-item-span game-stats">{team.gamesWon}</span>
        <span className="list-item-span game-stats">{team.gamesDrew}</span>
        <span className="list-item-span game-stats">{team.gamesLost}</span>
        <span className="list-item-span goals">{team.goalsFor}</span>
        <span className="list-item-span goals">{team.goalsAgainst}</span>
        <span className="list-item-span goals">{team.goalDifference}</span>
        <span className="list-item-span points">{team.points}</span>
      </li>
    </Link>
  </>
}