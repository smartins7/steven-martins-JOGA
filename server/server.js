const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// Importing controllers - come back to this!
const getSoccer = require("./controller/getSoccer");
const getBasketball = require("./controller/getBasketball");
const getHockey = require("./controller/getHockey");
const getGames = require("./controller/getGames");

// Const App to use express method
const app = express();

app.use(express.json());
app.use(cors());

// Get, Post, Put and Delete Soccer Event Details

app
  .route("/soccer")
  .get((req, res) => {
    res.json(getSoccer());
  })
  .post((req, res) => {
    const gamesArray = getGames();
    let gamesId = "00-SOCCER-YVR-" + uuidv4();
    let gameIndex = gamesArray.findIndex((games) => games.name == "Soccer");
    const soccerObject = {
      gameId: gamesId,
      date: req.body.date,
      time: req.body.time,
      park: req.body.park,
      address: req.body.address,
      city: req.body.city,
      description: req.body.description,
      eventStatus: req.body.eventStatus,
      organizer: req.body.organizer,
      contact: req.body.contact,
      email: req.body.email,
      messages: req.body.messages,
    };
    gamesArray[gameIndex].events.push(soccerObject);
    fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
    res.json(soccerObject);
  });

app.post("/soccer/:id", (req, res) => {
  const gamesArray = getGames();
  const gameObj = gamesArray[0];
  let messageIndex = gameObj.events.findIndex(
    (event) => event.gameId == req.params.id
  );
  const soccerObject = {
    name: req.body.name,
    // time: new Date(),
    // time: "06/25/2020",
    time: req.body.time,
    comment: req.body.comment,
    messages: [],
  };

  gameObj.events[messageIndex].messages.push(soccerObject);
  gamesArray.splice(0, 1, gameObj);
  fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
  res.json(gamesArray);
});

app.put("/soccer/:id", (req, res) => {
  const gamesArray = getGames();
  let gameId = req.params.id;

  for (i = 0; i < gamesArray.length; i++) {
    let eventsArray = gamesArray[i].events;
    for (j = 0; j < eventsArray.length; j++) {
      if (gameId === eventsArray[j].gameId) {
        eventsArray[j].date = req.body.date;
        eventsArray[j].time = req.body.time;
        eventsArray[j].park = req.body.park;
        eventsArray[j].address = req.body.address;
        eventsArray[j].city = req.body.city;
        eventsArray[j].description = req.body.description;
        eventsArray[j].eventStatus = req.body.eventStatus;
        eventsArray[j].organizer = req.body.organizer;
        eventsArray[j].contact = req.body.contact;
        eventsArray[j].email = req.body.email;
      }
    }
  }
  fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
  res.json(gamesArray);
});

app.delete("/soccer/:id", (req, res) => {
  const gamesArray = getGames();
  console.log(gamesArray);
  const gameIndex = gamesArray[0];
  const gameEvents = gameIndex.events;
  const eventIndex = gameEvents.findIndex(
    (event) => event.gameId == req.params.id
  );
  gameEvents.splice(eventIndex, 1);
  gamesArray[0].events = gameEvents;
  fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
  res.json({ gamesArray });
});

// Get, Post, Put and Delete Basketball Event Details

app
  .route("/basketball")
  .get((req, res) => {
    res.json(getBasketball());
  })
  .post((req, res) => {
    const gamesArray = getGames();
    let gamesId = "00-BASKETBALL-YVR-" + uuidv4();
    let gameIndex = gamesArray.findIndex((games) => games.name == "Basketball");
    const basketballObject = {
      gameId: gamesId,
      date: req.body.date,
      time: req.body.time,
      park: req.body.park,
      address: req.body.address,
      city: req.body.city,
      description: req.body.description,
      eventStatus: req.body.eventStatus,
      organizer: req.body.organizer,
      contact: req.body.contact,
      email: req.body.email,
    };
    gamesArray[gameIndex].events.push(basketballObject);
    fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
    res.json(basketballObject);
  });

app.post("/basketball/:id", (req, res) => {
  const gamesArray = getGames();
  const gameObj = gamesArray[1];
  let messageIndex = gameObj.events.findIndex(
    (event) => event.gameId == req.params.id
  );
  const basketballObject = {
    name: req.body.name,
    // time: new Date(),
    // time: "06/25/2020",
    time: req.body.time,
    comment: req.body.comment,
  };

  gameObj.events[messageIndex].messages.push(basketballObject);
  gamesArray.splice(0, 1, gameObj);
  fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
  res.json(gamesArray);
});

app.put("/basketball/:id", (req, res) => {
  const gamesArray = getGames();
  let gameId = req.params.id;

  for (i = 0; i < gamesArray.length; i++) {
    let eventsArray = gamesArray[i].events;
    for (j = 0; j < eventsArray.length; j++) {
      if (gameId === eventsArray[j].gameId) {
        eventsArray[j].date = req.body.date;
        eventsArray[j].time = req.body.time;
        eventsArray[j].park = req.body.park;
        eventsArray[j].address = req.body.address;
        eventsArray[j].city = req.body.city;
        eventsArray[j].description = req.body.description;
        eventsArray[j].eventStatus = req.body.eventStatus;
        eventsArray[j].organizer = req.body.organizer;
        eventsArray[j].contact = req.body.contact;
        eventsArray[j].email = req.body.email;
      }
    }
  }
  fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
  res.json(gamesArray);
});

app.delete("/basketball/:id", (req, res) => {
  const gamesArray = getGames();
  console.log(gamesArray);
  const gameIndex = gamesArray[1];
  const gameEvents = gameIndex.events;
  const eventIndex = gameEvents.findIndex(
    (event) => event.gameId == req.params.id
  );
  gameEvents.splice(eventIndex, 1);
  gamesArray[1].events = gameEvents;
  fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
  res.json({ gamesArray });
});

// Get, Post, Put and Delete Street Hockey Event Details

app
  .route("/street-hockey")
  .get((req, res) => {
    res.json(getHockey());
  })
  .post((req, res) => {
    const gamesArray = getGames();
    let gamesId = "00-STREETHOCKEY-YVR-" + uuidv4();
    let gameIndex = gamesArray.findIndex(
      (games) => games.name == "Street-Hockey"
    );
    const hockeyObject = {
      gameId: gamesId,
      date: req.body.date,
      time: req.body.time,
      park: req.body.park,
      address: req.body.address,
      city: req.body.city,
      description: req.body.description,
      eventStatus: req.body.eventStatus,
      organizer: req.body.organizer,
      contact: req.body.contact,
      email: req.body.email,
    };
    gamesArray[gameIndex].events.push(hockeyObject);
    fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
    res.json(hockeyObject);
  });

app.post("/street-hockey/:id", (req, res) => {
  const gamesArray = getGames();
  const gameObj = gamesArray[2];
  let messageIndex = gameObj.events.findIndex(
    (event) => event.gameId == req.params.id
  );
  const hockeyObject = {
    name: req.body.name,
    // time: new Date(),
    // time: "06/25/2020",
    time: req.body.time,
    comment: req.body.comment,
  };

  gameObj.events[messageIndex].messages.push(hockeyObject);
  gamesArray.splice(0, 1, gameObj);
  fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
  res.json(gamesArray);
});

app.put("/street-hockey/:id", (req, res) => {
  const gamesArray = getGames();
  let gameId = req.params.id;

  for (i = 0; i < gamesArray.length; i++) {
    let eventsArray = gamesArray[i].events;
    for (j = 0; j < eventsArray.length; j++) {
      if (gameId === eventsArray[j].gameId) {
        eventsArray[j].date = req.body.date;
        eventsArray[j].time = req.body.time;
        eventsArray[j].park = req.body.park;
        eventsArray[j].address = req.body.address;
        eventsArray[j].city = req.body.city;
        eventsArray[j].description = req.body.description;
        eventsArray[j].eventStatus = req.body.eventStatus;
        eventsArray[j].organizer = req.body.organizer;
        eventsArray[j].contact = req.body.contact;
        eventsArray[j].email = req.body.email;
      }
    }
  }
  fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
  res.json(gamesArray);
});

app.delete("/street-hockey/:id", (req, res) => {
  const gamesArray = getGames();
  console.log(gamesArray);
  const gameIndex = gamesArray[2];
  const gameEvents = gameIndex.events;
  const eventIndex = gameEvents.findIndex(
    (event) => event.gameId == req.params.id
  );
  gameEvents.splice(eventIndex, 1);
  gamesArray[2].events = gameEvents;
  fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
  res.json({ gamesArray });
});

// Local Host
app.listen(5000, console.log("app is listening at: http://localhost:5000"));
