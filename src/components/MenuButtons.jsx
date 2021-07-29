import "../styles/MenuButtons.css"
import {Link} from "react-router-dom";

export default function MenuButtons(){
  return <>
    <ul>
      <li className="menu-buttons">
        <Link className="links" to="/ResultEntryForm">
          Register a Result
        </Link>
      </li>
      <li className="menu-buttons">
        <Link className="links" to="/NewTeamEntryForm">
          Add a new Team
          </Link>
      </li>
      <li className="menu-buttons">
        <Link className="links" to="/Results"> 
          Results
        </Link>
      </li>
      <li className="menu-buttons">
        <Link className="links" to="/Fixtures"> 
          Fixture List
        </Link>
      </li>
      <li className="menu-buttons">
        <Link className="links" to="/"> 
          Main Table
        </Link>
      </li>
    </ul>
  </>
}

/*
/ResultEntryForm
*/
