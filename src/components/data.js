//export let baseURL = "http://localhost:3500"
export let baseURL = process.env.REACT_APP_API_URL
export let leagueStartDateURL = baseURL + "leagueStartDate"
export let teamsURL = baseURL + "teams"
export let resultsURL = baseURL + "results"

