# ETMC (Earth To Mars Communicator)

The surface of Mars can be modelled by a rectangular grid around which robots are able to move according to instructions provided from Earth.
ETMC is the Earth To Mars Communicator, which receives each sequence of robot positions and reports the final position of the robot.

A robot position consists of a grid coordinate (a pair of integers: x-coordinate followed by y-coordinate) and an orientation (N, S, E, W for north, south, east, and west).
A robot instruction is a string of the letters:

- L: Left, the robot turns left 90 degrees and remains on the current grid point.
- R: Right, the robot turns right 90 degrees and remains on the current grid point.
- F: Forward, the robot moves forward one grid point in the direction of the current
orientation and maintains the same orientation.

The direction North corresponds to the direction from grid point (x, y) to grid point (x, y+1).

Since the grid is rectangular and bounded (...yes Mars is a strange planet), a robot that
moves “off” an edge of the grid is lost forever. However, lost robots leave a robot “scent” that
prohibits future robots from dropping off the world at the same grid point. The scent is left at
the last grid position the robot occupied before disappearing over the edge. An instruction to
move “off” the world from a grid point from which a robot has been previously lost is simply
ignored by the current robot.


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

## The Input

The first line of input is the upper-right coordinates of the rectangular world, the lower-left
coordinates are assumed to be 0, 0.
The remaining input consists of a sequence of robot positions and instructions (two lines per
robot). A position consists of two integers specifying the initial coordinates of the robot and
an orientation (N, S, E, W), all separated by whitespace on one line. A robot instruction is a
string of the letters “L”, “R”, and “F” on one line.
Each robot is processed sequentially, i.e., finishes executing the robot instructions before the
next robot begins execution.
The maximum value for any coordinate is 50.
All instruction strings will be less than 100 characters in length.

## The Output

For each robot position/instruction in the input, the output should indicate the final grid
position and orientation of the robot. If a robot falls off the edge of the grid the word “LOST”
should be printed after the position and orientation.

## Sample Data

Here is some sample data to use as input:
```
5 3
1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL
```
The app should output the following:
```
1 1 E
3 3 N LOST
2 3 S
```

## Running the tests

To run the unit tests and e2e tests, you will need to first run the app (for the e2e tests) by typing the following command from the etmc folder:
```
npm start
```

In a separate command prompt, while the application is running, type the following command from the etmc folder:
```
npm test
```
Test output should be:
```

> etmc@1.0.1 test
> cd server && npm test && npm run e2etest


> etmc-server@1.0.1 test
> jest

 PASS  tests/unit/radio.test.js
 PASS  tests/unit/robot.test.js
 PASS  tests/unit/planet.test.js
                                                                                                         
Test Suites: 3 passed, 3 total                                                                           
Tests:       21 passed, 21 total
Snapshots:   0 total
Time:        0.512 s, estimated 1 s
Ran all test suites.

> etmc-server@1.0.1 e2etest
> npx cypress run --browser chrome



====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐     
  │ Cypress:        12.7.0                                                                         │     
  │ Browser:        Chrome 110 (headless)                                                          │     
  │ Node Version:   v18.13.0 (C:\Program Files\nodejs\node.exe)                                    │     
  │ Specs:          2 found (001_main_heading.feature, 002_get_output_from_input.feature)          │     
  │ Searched:       **/*.feature                                                                   │     
  └────────────────────────────────────────────────────────────────────────────────────────────────┘     


────────────────────────────────────────────────────────────────────────────────────────────────────     

  Running:  001_main_heading.feature                                                        (1 of 2)     


  main_heading
    √ Heading should show when opening the app. (365ms)


  1 passing (387ms)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐     
  │ Tests:        1                                                                                │     
  │ Passing:      1                                                                                │     
  │ Failing:      0                                                                                │     
  │ Pending:      0                                                                                │     
  │ Skipped:      0                                                                                │     
  │ Screenshots:  0                                                                                │     
  │ Video:        true                                                                             │     
  │ Duration:     0 seconds                                                                        │     
  │ Spec Ran:     001_main_heading.feature                                                         │     
  └────────────────────────────────────────────────────────────────────────────────────────────────┘     


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: 0 seconds

  -  Video output: C:\dev\etmc\server\cypress\videos\001_main_heading.feature.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────     

  Running:  002_get_output_from_input.feature                                               (2 of 2)     


  get_output_from_input
    √ Get output from input. (1565ms)


  1 passing (2s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐     
  │ Tests:        1                                                                                │     
  │ Passing:      1                                                                                │     
  │ Failing:      0                                                                                │     
  │ Pending:      0                                                                                │     
  │ Skipped:      0                                                                                │     
  │ Screenshots:  0                                                                                │     
  │ Video:        true                                                                             │     
  │ Duration:     1 second                                                                         │     
  │ Spec Ran:     002_get_output_from_input.feature                                                │     
  └────────────────────────────────────────────────────────────────────────────────────────────────┘     


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: 0 seconds

  -  Video output: C:\dev\etmc\server\cypress\videos\002_get_output_from_input.feature.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  001_main_heading.feature                 382ms        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  002_get_output_from_input.feature        00:01        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:01        2        2        -        -        -

```
