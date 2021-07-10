const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];
/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(arr, str) {
  let foundUser = arr.find(function(obj){
    return obj.username === str;
  })
  return foundUser;
}


/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let userToRemove = usersArray.findIndex(function(obj, i){
    return obj.username === username;
  })
  if (userToRemove >=0){
    return usersArray.splice(userToRemove, 1)[0];
  } else {
    return undefined;
  }
  
}