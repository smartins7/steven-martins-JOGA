const fs = require("fs");

const getBasketball = () => {
  const basketballData = fs.readFileSync("./model/games.json");

  const mappedBasketballData = JSON.parse(basketballData)
    .filter((game) => game.name == "Basketball")
    .map((games) => {
      return games.events;
    })
    .shift();

  return mappedBasketballData;
};

module.exports = getBasketball;
