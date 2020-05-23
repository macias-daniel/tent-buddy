# Tent Buddy

[GitHub](https://github.com/macias-daniel/tent-buddy)
[Deployed Link](https://shielded-ocean-68745.herokuapp.com/profile)

## Table of Contents

- [Description](#description)
- [Files](#files)
- [Visuals](#visuals)
- [Usage](#usage)
- [Installation](#installation)
- [Test](#test)
- [Support](#support)

## Description

- An app that finds the satellites in orbit above you and allows you to track your favorites.
  The app shows the user's current city and displays markers of all satellites currently above them. When you click the links a modal is opened displaying more details and an option to bookmark that satellite. Bookmarked satellites are stored in the side bar and you can click on any to get their next visual pass over your location. Go to the map page and see a satellite image of your location with the names and coordinates of the satellites as they are positioned above you. Search by category on the home page to see _what's up there!_

## Visuals

- Demonstrations of the application

## Usage

- Refer to the API terms of use for proper usage. APIs: OpenWeatherMap, National Parks API, and REI Mountain Data API

## Installation

- Run `npm install` and make sure install all dependencies.

## Test

Run `npm run lint` from the project root to run eslint checks on the backend
and front end code. Run `npm run lint` from the `client` directory to lint the
client only.

The root and client have convenience scripts define to easily apply auto-fixes
with eslint. Run `npm run lint:fix` from the root and `client` to apply fixes
for the entire project or client only respectively.

## Travis CI

A basic configuration for Travis CI is included. Configure the GitHub repo to
run checks before merging to enforce linting checks and tests.

**IMPORTANT!** Add the mongodb service to `.travis.yml` if tests using MongoDB
are included in the project. Likewise, if another database is used to replace
MongoDB, then `.travis.yml` will need to be updated accordingly. Please refer
to the [Travis CI Documentation](https://docs.travis-ci.com/) for more
information.


## _Support_

[<img src="https://avatars2.githubusercontent.com/u/59327488?v=4" alt="avatar" style="border-radius: 75px" width="75"/>](https://github.com/macias-daniel)

- Daniel Macias-Ericson

[<img src="https://avatars3.githubusercontent.com/u/60668617?v=4" alt="avatar" style="border-radius: 75px" width="75"/>](https://github.com/charrmountain)

- Charlotte Mountain

[<img src="https://avatars3.githubusercontent.com/u/61394430?v=4" alt="avatar" style="border-radius: 75px" width="75"/>](https://github.com/NathanNaylor)

- Nathan Naylor

[<img src="https://avatars3.githubusercontent.com/u/58489761?v=4" alt="avatar" style="border-radius: 75px" width="75"/>](https://github.com/kanercruzwalker)

- Kane Cruz-Walker
