import { Switch, Route } from "react-router-dom"
import './styles/App.css';
import Header from "./components/Header.jsx"
import MainTable from "./pages/MainTable.jsx"
import TeamInfo from "./pages/TeamInfo.jsx"
import FourOFour from "./pages/FourOFour"
import ResultEntryForm from "./pages/ResultEntryForm";
import NewTeamEntryForm from "./pages/NewTeamEntryForm";
import Fixtures from "./pages/Fixtures";
import Footer from "./components/Footer"
import MenuButtons from "./components/MenuButtons";
import useStore from "./hooks/useStore"
import MainResults from "./pages/MainResults"

function App() {
  let leagueStartDate = useStore(store => store.leagueStartDate)
  let retrieveTeams = useStore(store => store.retrieveTeams)
  let retrieveResults = useStore(store => store.retrieveResults)
  let retrieveleagueStartDate = useStore(store => store.retrieveleagueStartDate)

  if(!leagueStartDate) retrieveleagueStartDate()
  console.log(leagueStartDate)
  retrieveTeams()
  retrieveResults()

  return <div className="app-container">
    <Header/>
    <Switch>
      <Route path="/" exact>
        <MainTable/>
        <MenuButtons/>
      </Route>           
      <Route path="/TeamInfo/:id">
         <TeamInfo/>
         <MenuButtons/>
      </Route>
      <Route path="/ResultEntryForm" exact>
         <ResultEntryForm/>
         <MenuButtons/>
      </Route>
      <Route path="/NewTeamEntryForm" exact>
         <NewTeamEntryForm/>
         <MenuButtons/>
      </Route>
      <Route path="/Results" exact>
         <MainResults/>
         <MenuButtons/>
      </Route>
      <Route path="/Fixtures"exact>
         <Fixtures/>
         <MenuButtons/>
      </Route>
      <Route>
         <FourOFour/>
      </Route>
    </Switch>

    <Footer/>  
  </div>
}

export default App;
