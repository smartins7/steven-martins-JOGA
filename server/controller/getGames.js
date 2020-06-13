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
  return mappedGameData;
};

module.exports = getGames;
