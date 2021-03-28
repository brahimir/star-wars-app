# Star Wars Compendium

This web application is designed as a collection of data based on the Characters from the Star Wars Universe.

The information on each Character and their respective metadata were retrieved using [SWAPI](https://swapi.dev/).

### Architecture

Project architecture was designed to be extendable with its various components and layouts.

With the core functionality of the project being in the Characters list, more functionality could be included and incorporated alongside the SWAPI fetch calls.

### Trade-offs and Re-designs

Due to a slight oversight of the functionality instructions, pagination and navigation on the actual Character list was implemented on the Character Details Page, allowing users to browse to the Next Character, Previous Character, and Back to the Character List.

An example of a design trade-off that was implemented was storing some of the Character's metadata in seperate states.

This decision was made with the idea in mind that if more details on the Character's metadata were to be implemented (for example, metadata on the Character's Homeworld), it would be easier to pass the state of the Homeworld to a seperate Component to fetch and display results there, as opposed to sending the entire Character along with all of their metadata to only render their Homeworld data.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
