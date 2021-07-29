//import "../styles/Fixtures.css"
export default function RenderFixtureListItem({fixture}){

  return <>
      <li className="fixture-li">
        <span className="fixtures-list-item-span fixture-list-item-place">{fixture.matchDay}</span>
        <span className="fixtures-list-item-span ">{fixture.homeTeam.name}</span>
        <span className="fixtures-list-item-span "> vs </span>
        <span className="fixtures-list-item-span ">{fixture.awayTeam.name}</span>
      </li></>
}


