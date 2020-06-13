const fs = require("fs");

const getHockey = () => {
  const hockeyData = fs.readFileSync("./model/games.json");

  const mappedHockeyData = JSON.parse(hockeyData)
    .filter((game) => game.name == "Street-Hockey")
    .map((games) => {
      return games.events;
    })
    .shift();

  return mappedHockeyData;
};

module.exports = getHockey;
