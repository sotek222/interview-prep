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

function destCity(paths){
  const orderedPath = [];

  for(let i = 0; i < paths.length; i++){
    const indexOfCurrentStartingLocation = orderedPath.indexOf(paths[i][0]);
    const indexOfCurrentDestination = orderedPath.indexOf(paths[i][1]); 


    if(indexOfCurrentDestination >= 0){
      orderedPath.splice(indexOfCurrentDestination, 0, paths[i][0]);
    } else if(indexOfCurrentStartingLocation >= 0){
      orderedPath.splice(indexOfCurrentStartingLocation + 1, 0, paths[i][1]);
    } else {
      orderedPath.push(paths[i][0], paths[i][1]);
    }
  }
  return orderedPath.pop();
};



// paths = [["B","C"],["D","B"],["C","A"]]
// if we iterate over every path in our paths array
// each path is as follows: 
// ["B", "C"]
// ["D", "B"]
// ["C", "A"]

// how do we design the entire path?
// which data structure would suit this?
// If we use an array we can create the path. 
// path[0] is the starting location
// path[1] is the destination 
// we want to map out the trip from the first location to the last destination. 
// "B" points to "C"
// "D" points to "B"
// "C" points to "A"

// so the whole trip is thus: 
// "D" -> "B" -> "C" -> "A"
// so we return "A"
//   
// ["B", "C"]
// ["D", "B", "C"]
// ["D", "B", "C", "A"]
// "A"
// var orderedPath = [];
// FOR path of paths: 
//   IF path[1] is in orderedPath
//     find the index and insert path[0] before it
//   ELSE IF path[0] is in orderedPath
//     find the index and inset path[1] after 
//  ELSE 
//    insert both path[0] && path[1] into orderedPath
//  return last element in orderedPath
module.exports = destCity;