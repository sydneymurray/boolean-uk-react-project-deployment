import "../styles/MainTable.css"
import useStore from "../hooks/useStore"
import buildTableArray from "../components/buildTableArray"
import RenderTeamListItem from "../components/RenderTeamListItem"

export default function MainTable(){
  let teams = useStore(store => store.teams)
  let results = useStore(store => store.results)
  if (teams === null || results === null) return <></>
  let tableArray = buildTableArray(teams, results)

  return <>
    <ul className="main-list">
      <li className="heading-li">
        <span className="list-item-span list-item-place">#</span>
        <span className="list-item-span team-name">Team</span>
        <span className="list-item-span spacer"></span>
        <span className="list-item-span games-played">Played</span>
        <span className="list-item-span game-stats">Won</span>
        <span className="list-item-span game-stats">Drew</span>
        <span className="list-item-span game-stats">Lost</span>
        <span className="list-item-span goals">Goals For</span>
        <span className="list-item-span goals">Goals Against</span>
        <span className="list-item-span goals">Goal Diff.</span>
        <span className="list-item-span ">Points</span>
      </li>
      {tableArray.map((team, index) =><RenderTeamListItem team={team} key={index}/>)}
    </ul>
  </>

}

