/* Destination City (Array Problem, Leetcode)

  Prompt: 
   You are given the array paths, where paths[i] = [cityAi, cityBi] this means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

   It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

 Example 1:
   Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
   Output: "Sao Paulo" 
   Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

Example 2:
  Input: paths = [["B","C"],["D","B"],["C","A"]]
  Output: "A"
  Explanation: All possible trips are: 
  "D" -> "B" -> "C" -> "A". 
  "B" -> "C" -> "A". 
  "C" -> "A". 
  "A". 
   the destination city is "A".

Example 3:
  Input: paths = [["A","Z"]]
  Output: "Z"
*/

/**
 * destCity
 * @param {string[][]} paths
 * @return {string}
*/

// function destCity(paths){
   // add code here
// };


// Matt's first solution: 

// function destCity(paths){
//   const orderedPath = []; // an array that will store the entire "trip" in correct order

//   for(let i = 0; i < paths.length; i++){ //iterate over every element
//     const indexOfCurrentStartingLocation = orderedPath.indexOf(paths[i][0]); // get the index if the current starting location is in the orderedPath array already
//     const indexOfCurrentDestination = orderedPath.indexOf(paths[i][1]); // get the index if the current destination is in the orderedPath already 

//     if we already have the destination
//     if(indexOfCurrentDestination >= 0){// add the current starting location before the current the destination 
//       orderedPath.splice(indexOfCurrentDestination, 0, paths[i][0]);
//     } else if(indexOfCurrentStartingLocation >= 0){ // if we have the starting location in the orderedPath 
//       orderedPath.splice(indexOfCurrentStartingLocation + 1, 0, paths[i][1]);
//     } else {
//       orderedPath.push(paths[i][0], paths[i][1]);
//     }
//   }
//   return orderedPath.pop();
// };


//David's solution
// function destCity(paths){
//   const cityMap = {}; //a map to keep track of all the times a city occurs
//   let destination;

//   if(paths.length <= 1) {
//     //first check to see if there's only one destination in the given array
//     //if so then just return the last city in the nested array
//     destination = paths[0][1];
//   }

//   if(paths.length > 1) {
//     for(let i = 0; i < paths.length; i++) {
//       //loop through the array to access each nested array
//       for(let j = 0; j < paths[i].length; j++) {
//         //loop through the nested array based on the length of that nested array
//         if( cityMap[paths[i][j]] ) {
//           //increment the count of that city by 1 if it already exist in the map
//           cityMap[paths[i][j]]+=1;
//         } else {
//           //if it does not exist then create it
//           cityMap[paths[i][j]] = 1;
//         }
//       }
//     } //end of for loop

//     for(const city in cityMap) {
//       //loop through the map and return the key with a value of 1 since the array is
//       //guaranteed to always have exactly 1 destination
//       if(cityMap[city] === 1) {
//         destination = city;
//       }
//     }
//   }

//   return destination;
// };

module.exports = destCity;