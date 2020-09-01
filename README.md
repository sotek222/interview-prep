# INTERVIEW PREP: 
Welcome to the interview preparation REPL. This REPL will be used to post algorithms that we as a group can work on. There are a few pointers in how to add a new problem or create new files. 

### Adding algorithms: 
  In order to add an algorithm and maintain its useful look up theres two things you should do. First there is a general folder where you can find or create a new JS folder with the date. In there you can then create a file named as the date and paste the prompt, expected output, etc. If you think this problem is one we should as a group keep in mind. Then you can add it as its own file in its respective category. As well as pasting the problem it is also useful to create a few test cases in which to test inputs against. In order to do this please add another file to the same folder like so e.g. 08-19-2020/08-19.2020.test.js (see below for instructions on the syntax for writing tests)


### REPL STRUCTURE: 
/ Root README.md
./Algorithms (This directory will contain all the different categories of algos in their own sub-directories)
./Daily Challenges (This directory will contain normal js files with the current date.)
./Mock Interviews (This directory will contain normal js files in which to conduct an interview)

### Daily challenges: 

This sub-directory will house normal js files. This is where we should place algorithms that we are all going to work on for that day. When they are solved we can all use that main file to show each other our solutons or just talk about the problem. 

The best way to paste a problem is as such: 
```
/* Name of Algoritm (category of problem eg(String manipulation, Array management, etc)) Resource of Algoritm (Leetcode, hackerrank, etc)

  Here you should explain the problem prompt. 

   Example 1: 
    # example explanation and output here
*/

/**
 * Function name.
 * @param {string} paramName - Param description.
 * @param {number} paramName - Param description.
 * @returns {number} (the part in the braket is the expected datatype)
 */

 funtion aFunction(paramNameOne, paramNameTwo){
    // add code here
 };
```

### Writing Tests: 

This repl uses the Jest testing suite to run its tests against each algorithm. When you click run at the top it actually fires off the ```jest``` command. This command will then recursively look through every folder and any file that has test as an extension will be run. 

the syntax for writing tests, given file name (08-19-2020.test.js) 

```
// we need to import the function from the file that has the problem 
const someFunction = require('./08-19-2020.js');

// the describe function groups a set of tests together, it takes two arguments. The first is a string that will be displayed on the console. The second is a callback function that will fire upon execution of the describe function 
describe('someFunction', () => {
  // the it function is similar to the describe function in how it operates and its parameters. 
  it('does something with an input', () => {
    // the expect function takes a result and returns an object that has reference to result from the function call
    // you can then call methods on that like toBe which checks the output of the algorithm against an expected output and returns true or false depending on if the test passes or not
    expect(someFunction(someInput)).toBe(someResult);
  });
});
```

### Mock interviews: 

The best way to go about doing mock interviews is to place a new JS file in the Mock Interviews sub-directory. It should be named something like mm-dd-yyyy-mockInterview.js
so we can keep track of them. 
