# Today's Weather

## Setup and run
To set up and run the application, follow the steps below:

- Run ```npm install``` or ```yarn``` to install the dependencies.
- Run `npm start` or `yarn start` to start the application.

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container for all the code inside your application.
  - `assets`: Contains assets such as images and vectors.
  - `components`: Stores common components used throughout the app, such as a generic button.
  - `constants`: Holds any kind of constants used in the application.
  - `hook`: Contains custom hooks
  - `services`: Handles logic related to external API communications.
  - `store`: Stores all Redux middlewares and the store.
  - `types`: Contains types/interfaces.
  - `utils`: Stores reusable methods and logic.
- `App.tsx`: Main component that starts your whole app.
- `index.tsx`: Entry point of your application as per React Js standards.

 ## Requirement - User stories
 1. Display information at least based on mock up UI.
 2. User can input city and country name to get weather information and display them on UI. Please
use AJAX to get weather information from OpenWeatherAPI(https://openweathermap.org/api).
 3. User can find their records in search history, and can click search button to call api again. Can click
delete button to remove the record.
 4. If user inputs invalid city or country name, show appropriate message on UI.