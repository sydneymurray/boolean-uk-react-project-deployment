import "../styles/NewTeamEntryForm.css"
import useStore from "../hooks/useStore"

export default function NewTeamEntryForm(){
  let registerNewTeam = useStore(store => store.registerNewTeam)
  let addNewTeam = useStore(store => store.addNewTeam)

  function submitForm(event){
    addNewTeam({name: event.target.newTeamName.value, image: event.target.newTeamImage.value, info: event.target.teamInfo.value})
    registerNewTeam({name: event.target.newTeamName.value, image: event.target.newTeamImage.value, info: event.target.teamInfo.value})
  event.target.reset()
  }


  return <>
    <form className="registration-input-form" onSubmit={event => submitForm(event)}>
      <label className="team-input-label">Team Name:</label>
      <input type="text" name="newTeamName" required></input>
      <label className="team-image-label">Stadium Image:</label>
      <input type="text" name="newTeamImage" required></input>
      <label className="team-input-label">Team Information:</label>
      <textarea name="teamInfo" id=""  rows="5"></textarea>       
      <button className="result-button reg-button" type="submit">Register Team</button>
    </form>
  </>
}

