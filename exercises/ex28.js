/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
  name: "Fernanda",
  numFriends: 100,
  messages: [
    "Good morning Sae!",
    "This kitty is soooo cuuuuuuteteeee!!",
    "This restaurant is awfull. Bad food and bad customer service",
    "Happy birthday my dear friend Dani! Love you! <3",
  ],

  postMessage: function (message) {
    this.messages.push(message);
    return console.log(this.messages);
  },
  deleteMessage: function (index) {
    this.messages.splice(index, 1);
    return console.log(this.messages);
  },
  addFriend: function () {
    return (this.numFriends += 1);
  },
  removeFriend: function () {
    return (this.numFriends -= 1);
  },
};

console.log(facebookProfile.addFriend());
console.log(facebookProfile.removeFriend());
facebookProfile.postMessage("I love Javascript!");
facebookProfile.deleteMessage(2);
