const fs = require("fs");

const getGames = () => {
  const gameData = fs.readFileSync("./model/games.json");

  const mappedGameData = JSON.parse(gameData).map((games) => {
    return {
      id: games.id,
      name: games.name,
      location: games.location,
      events: games.events,
    };
  });
  //Todo: try to return the entire json file and see if you can resolve the error this creates in the delete event. Want to read and write the entire json file.
  //try to return gameData
  return mappedGameData;
};

module.exports = getGames;
