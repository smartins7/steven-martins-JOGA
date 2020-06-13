const fs = require("fs");

const getGames = () => {
  const gameData = fs.readFileSync("./model/games.json");

  const mappedGameData = JSON.parse(gameData).map((games) => {
    return {
      id: games.id,
      name: games.name,
      location: games.location,
      events: games.events,
      // gameId: games.gamesId,
      // date: games.date,
      // time: games.time,
      // park: games.park,
      // address: games.address,
      // city: games.city,
      // description: games.description,
      // eventStatus: games.eventStatus,
      // organizer: games.organizer,
      // contact: games.contact,
      // email: games.email,
    };
  });
  return mappedGameData;
};

module.exports = getGames;
