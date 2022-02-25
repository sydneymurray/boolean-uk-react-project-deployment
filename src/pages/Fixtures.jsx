import "../styles/Fixtures.css"
import useStore from "../hooks/useStore"
import buildFixturesArray from "../components/buildFixturesArray"
import RenderFixtureListItem from "../components/RenderFixtureListItem.jsx"

export default function Fixtures(){
  let teams = useStore(store => store.teams)
  let leagueStartDate = useStore(store => store.leagueStartDate)

  if (teams === null || leagueStartDate === null) return <></>
  let fixturesList = buildFixturesArray(teams, leagueStartDate)

  return <>
    <ul className="main-fixture-list">
      <li className="fixture-heading-li">
        <span className="fixtures-list-item-span fixture-list-item-place">
          <span className="no-match">Match-</span>Day
        </span>
        <span className="fixtures-list-item-span">Home-Team</span>
        <span className="fixtures-list-item-span"></span>
        <span className="fixtures-list-item-span">Away-Team</span>
      </li>
      {fixturesList.map(fixture => <RenderFixtureListItem  fixture={fixture}/>)}
    </ul></>
}

