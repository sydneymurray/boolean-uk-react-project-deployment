# My Football League 
A league table where you can create teams, view fixtures and add and view results. \
This project is built upon React & JSON Server.

## How to build this app
mkdir league-table-folder \
cd league-table-folder> \
git clone https://github.com/sydneymurray/boolean-uk-react-project.git \
npm install

## Start JSON Server
json-server --watch db/db.json -p 3500

## Start front end
Comment out `export let baseURL = process.env.REACT_APP_API_URL` in src/components/data.js \
Uncomment `//export let baseURL = "http://localhost:3500/"` in src/components/data.js \
npm run start

