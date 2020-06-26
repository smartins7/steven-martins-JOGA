## CONSIDERATIONS:

The app looks best primarily at a viewport of 320x864 px, but could also be viewed at any width, as long as the height is always set to 864px. This is because there are fixed headers and footers in the app. The fixed headers and footers were styled according to the height of 864px to fit nicely with the page content.

Also have HTTP PUT /soccer/:id, HTTP PUT /basketball/:id, and HTTP PUT /street-hockey/:id set-up and fully functional to edit specific sports events objects in the backend but was unable to connect this and have it functional on a front-end component in time.

## JOGA

JOGA is an app where people can go to see local sports pick-up games created by other users or create their own games for other users to join. At the moment, JOGA caters to those looking to play soccer, basketball, and street-hockey because those would be the easiest to set up with many local parks having a soccer field, basketball court, or a street-hockey box.

J.O.G.A. is an acronym for Join Open Games Application and the word “joga” also means “to play” in Portuguese.

## TECH STACK:

Front-end: React and SASS
Back-end: Node and Express.

## SETUP:

1. Clone repo
2. Navigate to client folder and run "npm i"
3. Navigate to server folder and run "npm i"
4. While in server folder, run "npm start" to start project.

## VIEWPORT:

The app looks best primarily at a viewport of 320x864, but could also be viewed at any width, as long as the height is always set to 864px. This is because there are fixed headers and footers in the app.

## APP ROUTES:

/ - initial landing/home page.

/soccer - home page for listed or created soccer games.

/soccer/:id - details about a specific soccer game listed.

/basketball - home page for listed or created basketball games.

/basketball/:id - details about a specific basketball game listed.

/street-hockey - home page for listed or created street-hockey games.

/street-hockey/:id - details about a specific street-hockey game listed.

## GENERAL FUNCTIONALITY:

From the home screen you can click on the soccer, basketball, or street-hockey icons in the footer. Clicking on an icon will bring you to that respective sport’s page. There will be a list there of games created by other users or you can click on the plus icon to fill out a form and post your own. By clicking on one of the listed games description, it will redirect you to a details page for that specific game telling you the address of the park, the organizers name, the organizer’s contact information, and a whole lot more. You could either contact the organizer via the contact information provided or leave a message on the detail page for the organizer.
