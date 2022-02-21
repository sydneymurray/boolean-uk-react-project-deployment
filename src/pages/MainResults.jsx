import "../styles/MainResults.css"
import useStore from "../hooks/useStore"
import RenderTeamResultListItem from "../components/RenderTeamResultListItem"

export default function MainResults(){
  let teams = useStore(store => store.teams)
  let results = useStore(store => store.results)
  results.sort((a, b) => a.matchDay - b.matchDay)

  if (teams === null || results === null) return <></>

  return <>
    <ul className="main-result-list">
      <li className="result-heading-li">
        <span className="fixture-list-item-span fixture-list-item-place match-day">Match-Day</span>
        <span className="fixture-list-item-span home-team">Home-Team</span>
        <span className="fixture-list-item-span home-goals">Home Goals</span>
        <span className="fixture-list-item-span result-separator"></span>
        <span className="fixture-list-item-span away-team">Away Goals</span>
        <span className="fixture-list-item-span away-goals">Away-Team</span>
      </li>
      {results.map((result, index)=><RenderTeamResultListItem result={result} key={index}/>)}
    </ul>
  </>
  
  }

