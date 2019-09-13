# The Stephen Kingdom - Capstone project planning

#### By Megan Schulte 7-19-2019

## Description

This mobile app will be a database for information on Stephen King related movies and mini-series. It will provide users with information specific to how the work is relate to Stephen King, be it writing, directing, or just being based off his literature. This information will be pulled from a Firebase database as a stretch goal. As a stretch goal it will also provide the user with information on where the movies can be viewed online by use of the Utelly API. Because I will be learning how to build a React Native app for the first time and would also like to incorporate some accessibility functions into the app, the content structure will be kept somewhat simple for MVP.

## Current Features

- splash screen with title, tagline, image and bottom nav bar that navigates to movie info screen and about screen.
- Movie info screen with title, brief app info section, movies posters imgages are displayed in grid that pulls uri image links from Firebase.
- Clicking on movie poster pulls up more info about each movie, pulled from Firebase
- Fade-in animation added to titles
- Other cool styling 😎
- Basic about page with info on why I made app and list of fun facts about Stephen King.

## Stretch Goals

- Text reader function and other accessibility focus
- Sort function for movies.
- Search funtion for movies.
- Add API call to Utelly so user can see where movie is able to be streamed.

## Setup/Installation Requirements

- clone app from repo: [the-stephen-kingdom](https://github.com/meganschultepdx/the-stephen-kingdom)
- make sure you have latest version of Node.js installed.
- run \$ npm install expo-cli --global in command line.
- cd into project on command line.
- run \$ expo start
- Download the Expo Client app on your mobile device. Will work with either iOS or Android.
- Open the app and scan the QR code in the command line. Expo will then bundle your project and load it on your device.
- click on the project name if it deosn't automatically load.
- Open project in your favorite text editor to make changes. Any changes you make will automatically appear on your device as long as project is running.
- Check out [Expo](https://expo.io/) for help with any issues.

## Component Tree/Project Planning

![](assets/images/screenshots.png)

## Known Bugs

No known bugs

## Support and contact details

Create a pull request on GitHub.

## Technologies Used

- React Native
- React
- Expo
- Appetize.io
- JSX
- Material-for React Native
- Firebase
- Babel (with in Expo)

### License

GPL, keep information free.

Copyright (c) 2019 Megan Schulte
