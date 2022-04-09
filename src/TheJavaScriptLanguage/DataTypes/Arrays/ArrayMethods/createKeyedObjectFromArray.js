// saving this solution because the provided solution seemed wrong until I re-read the constraint for the input objects
// this solution handles a scenario where we may have multiple objects with the same ID, but different properties

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
  {id: 'john', food: "Chips", footSize: 9000},
];

function groupById(users) {
  const result = {};
  
  for(const user of users) {
    if(result[user.id] === undefined) {
      result[user.id] = users.reduce((reducedUser, currentUser) => {
        if(currentUser.id !== user.id) return reducedUser;
        for(const prop of Object.keys(currentUser)) {
          reducedUser[prop] = currentUser[prop];
        }
        return reducedUser;
      }, {})
    }
  }
  
  return result;
}

let usersById = groupById(users);
console.log(usersById);
