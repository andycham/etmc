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
To install the dependencies, run the following commands from the etmc folder:
```
cd server
npm install
```

## Running the app

To run the app
```

```

## Running the tests

To run the tests
```

```
Test output should be:
```

```