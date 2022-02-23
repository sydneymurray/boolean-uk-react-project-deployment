import "../styles/TeamInfo.css"
import {useParams} from "react-router-dom"
import useStore from "../hooks/useStore"
import RenderTeamResultListItem from "../components/RenderTeamResultListItem"

export default function TeamInfo(){
  let teams = useStore(store => store.teams)
  let results = useStore(store => store.results)
  let {id} = useParams()

  if (id === undefined) return <></>
  if (teams === null || results === null) return <></>
  let team = teams[id - 1]
  let filteredResults = results.filter(result =>  Number(id) === result.homeTeam || Number(id) === result.awayTeam)

  return <>
    <div className="team-info-container">
      <div className="team-info-div">
        <h2>{team.name}</h2>
        <h4 className="team-info-text">{team.info}</h4> 
        <div className="image-container">
          <img className="team-image" src={team.image} alt={team.name}></img>
        </div>
      </div>
      <ul className="main-result-list">
        <li className="result-heading-li">
          <span className="fixture-list-item-span fixture-list-item-place match-day">Match-Day</span>
          <span className="fixture-list-item-span ">Home-Team</span>
          <span className="fixture-list-item-span ">Goals</span>
          <span className="fixture-list-item-span "> - </span>
          <span className="fixture-list-item-span ">Goals</span>
          <span className="fixture-list-item-span ">Away-Team</span>
        </li>
        {filteredResults.map(result=><RenderTeamResultListItem result={result}/>)}
      </ul>
    </div>
  </>
}

