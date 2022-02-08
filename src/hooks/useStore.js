import create from "zustand"
import {teamsURL} from "../components/data"
import {resultsURL} from "../components/data"
import {leagueStartDateURL} from "../components/data"

const useStore = create((set, get)=>({
  leagueStartDate: null,
  retrieveleagueStartDate() {
    fetch(leagueStartDateURL, {credentials: "include"})
      .then(resp => resp.json())
      .then(([leagueStartDate]) => set({leagueStartDate}))
  },
  teams: null,
  retrieveTeams() {
    fetch(teamsURL, {credentials: "include"})
      .then(resp => resp.json())
      .then(teams => set({teams}))
  },
  results: null,
  retrieveResults() {
    fetch(resultsURL)
      .then(resp => resp.json())
      .then(results => set({results}))
  },
  recordResult(result){
    fetch(resultsURL,{
      method:'POST',
      headers:{'Content-Type': 'Application/json'},
      body: JSON.stringify(result)
    })
  },
  registerNewTeam(newTeam){
    fetch(teamsURL,{
      method:'POST',
      headers:{'Content-Type': 'Application/json'},
      body: JSON.stringify(newTeam)
    })
  },
  addAResult: newResult => set(store => ({
    results: [...store.results, newResult]
  })),
  addNewTeam: newTeam => set(store => ({
    teams: [...store.teams, newTeam]
  }))
}))
export default useStore


