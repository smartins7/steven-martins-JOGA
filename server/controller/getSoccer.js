const fs = require("fs");

const getSoccer = () => {
  const soccerData = fs.readFileSync("./model/games.json");

  const mappedSoccerData = JSON.parse(soccerData)
    .filter((game) => game.name == "Soccer")
    .map((games) => {
      return games.events;
    })
    .shift();

  return mappedSoccerData;
};

module.exports = getSoccer;
