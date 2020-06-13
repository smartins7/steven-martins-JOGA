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
      date: new Date(),
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
    gamesArray[gameIndex].events.push(soccerObject);
    fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
    res.json(soccerObject);
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
  let gameId = req.params.id;
  let updatedEvents = [];
  for (i = 0; i < gamesArray.length; i++) {
    let eventsArray = gamesArray[i].events;

    for (j = 0; j < eventsArray.length; j++) {
      if (eventsArray[j].gameId !== gameId) {
        updatedEvents.push(eventsArray[j]);
      }
    }
    gamesArray[i].events = updatedEvents;
  }
  fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
  res.json(updatedEvents);
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
    const soccerObject = {
      gameId: gamesId,
      date: new Date(),
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
    gamesArray[gameIndex].events.push(soccerObject);
    fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
    res.json(soccerObject);
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
  let gameId = req.params.id;
  let updatedEvents = [];
  for (i = 0; i < gamesArray.length; i++) {
    let eventsArray = gamesArray[i].events;

    for (j = 0; j < eventsArray.length; j++) {
      if (eventsArray[j].gameId !== gameId) {
        updatedEvents.push(eventsArray[j]);
      }
    }
    gamesArray[i].events = updatedEvents;
  }
  fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
  res.json(updatedEvents);
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
    const soccerObject = {
      gameId: gamesId,
      date: new Date(),
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
    gamesArray[gameIndex].events.push(soccerObject);
    fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
    res.json(soccerObject);
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
  let gameId = req.params.id;
  let updatedEvents = [];
  for (i = 0; i < gamesArray.length; i++) {
    let eventsArray = gamesArray[i].events;

    for (j = 0; j < eventsArray.length; j++) {
      if (eventsArray[j].gameId !== gameId) {
        updatedEvents.push(eventsArray[j]);
      }
    }
    gamesArray[i].events = updatedEvents;
  }
  fs.writeFileSync("./model/games.json", JSON.stringify(gamesArray));
  res.json(updatedEvents);
});

// Local Host
app.listen(5000, console.log("app is listening at: http://localhost:5000"));
