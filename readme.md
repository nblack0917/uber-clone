# Uber Clone

This is an example of a partially functional clone of the Uber app. It was completed by following along with a crash course provided by Zero to Full Stack Hero on [www.papareact.com](https://www.papareact.com). Some additional functionality was complete on my own.

# Libraries

This project was completed using the following libraries:

- React Native
- Expo
- React Native Navigation
- React Native Elements
- Nativewind (TailwindCSS)
- Redux
- Redux Toolkit
- React Native Dotenv
- Google Places Autocomplete
- Google Maps
- Google Directions
-

# Install and Run

This project is built with Expo version 49.0.15. Clone repo to your local system and run `yarn` to install dependencies.

### Setup Google Console APIs

You will need to obtain your own API key from the Google API console.

- Go to https://console.cloud.google.com/ and create an account with
  billing enabled if you don't already have one.
- Create a new project
- Navigate to APIs and Services
- Enable the following APIs
  - Places API
  - Directions API
  - Distance Matrix API
- Create API key and copy

### Setup .env

Add a `.env` file in the top level folder with a variable named `GOOGLE_MAPS_APIKEY` with the value set to the API key obtained from the Google Cloud Console. Add `.env` to the `.gitignore` file.

## Run project

Open an terminal in the top level folder and run `npx expo start`
