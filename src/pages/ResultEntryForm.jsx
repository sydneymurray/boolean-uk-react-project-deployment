import "../styles/ResultEntryForm.css"
import useStore from "../hooks/useStore"

export default function ResultEntryForm(){
  let teams = useStore(store => store.teams)
  let recordResult = useStore(store => store.recordResult)
  let addAResult = useStore(store => store.addAResult)
  if (teams===null) 
    return <></>
 
  let sortedTeams = teams.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0;
  });
  sortedTeams = [{id: 0, name: "---Select-A-Team---"}, ...sortedTeams]

  let matchDay = []
  for (let day = 1; day < (teams.length) * 2 - 1; day++)
    matchDay = [...matchDay, day]
  
  let goalsScored = []
  for (let goals = 0; goals < 10 ; goals++)
    goalsScored = [...goalsScored, goals]

  function saveResult(event){
    event.preventDefault()
    if (event.target.homeTeam.value === 0 || event.target.awayTeam.value === 0 ) return
    if (event.target.homeTeam.value === event.target.awayTeam.value) return

    let result={
      homeTeam: Number(event.target.homeTeam.value),
      homeTeamScore: Number(event.target.homeTeamGoals.value),
      awayTeam: Number(event.target.awayTeam.value),
      awayTeamScore: Number(event.target.awayTeamGoals.value),
      matchDay: Number(event.target.matchDay.value)
    }
    addAResult(result)
    recordResult(result)
    alert(`The ${teams.find(team => team.id === result.homeTeam).name} vs ` + 
      `${teams.find(team => team.id === result.awayTeam).name} ` +
      `result was successfully registered`)
    event.target.reset()
  }

  return <div className="container">
    <form className="result-input-form" onSubmit={event => saveResult(event)}>

      <div className="team-result">
        <label className="result-input-label">Home Team<select name="homeTeam">
          {sortedTeams.map(team => <option key={team.name} value={team.id}>{team.name}</option>)}
        </select></label>
      
        <label className="result-input-label">Goals<select name="homeTeamGoals">
          {goalsScored.map(goal => <option key={goal} value={goal}>{goal}</option>)}
        </select></label>
      
        <label className="result-input-label">Away Team<select name="awayTeam">
          {sortedTeams.map(team => <option key={team.name} value={team.id}>{team.name}</option>)}
        </select></label>
      
        <label className="result-input-label">Goals<select name="awayTeamGoals">
          {goalsScored.map(goal => <option key={goal} value={goal}>{goal}</option>)}
        </select></label>
      </div>

      <div className="submission-details">
        <label className="result-input-label separate">Match Day<select name="matchDay">
          {matchDay.map(day => <option key={day} value={day}>{day}</option>)}
        </select></label>
        <button className="result-button separate" type="submit">Register Result</button>
      </div>
    </form>
  </div>
}
