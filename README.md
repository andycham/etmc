# ETMC (Earth To Mars Communicator)

The surface of Mars can be modelled by a rectangular grid around which robots are able to move according to instructions provided from Earth.
ETMC is the Earth To Mars Communicator, which receives each sequence of robot positions and reports the final position of the robot.

A robot position consists of a grid coordinate (a pair of integers: x-coordinate followed by y-coordinate) and an orientation (N, S, E, W for north, south, east, and west).
A robot instruction is a string of the letters:

L: Left, the robot turns left 90 degrees and remains on the current grid point.
R: Right, the robot turns right 90 degrees and remains on the current grid point.
F: Forward, the robot moves forward one grid point in the direction of the current
orientation and maintains the same orientation.

## Cloning the Repository
```
git clone https://github.com/andycham/etmc
```
Change to the application root folder (etmc):
```
cd etmc
```

## Installing Dependencies

Ensure that Node >= 14.0.0 and npm >= 5.6 are installed.
To install the dependencies (for both the React client and Express server), run the following command from the etmc folder:
```
npm run install-all
```

## Running the app

To run the app, run the following commands from the etmc folder:
```
npm start
```

## Running the tests

To run the tests, run the following command from the etmc folder
```
npm test
```
Test output should be:
```
> etmc@1.0.0 test
> cd server && npm test


> server@1.0.0 test
> jest

 PASS  tests/unit/radio.test.js
 PASS  tests/unit/planet.test.js
 PASS  tests/unit/robot.test.js

Test Suites: 3 passed, 3 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        0.501 s, estimated 1 s
Ran all test suites.
```