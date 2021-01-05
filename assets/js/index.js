'use strict';

function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}


function User(firstName, lastName, age, isMale, isSubscribed = false) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
  this.isSubscribed = isSubscribed;
  this.getFullName = getFullName;
}

function createRandomUsers(amount) {
  const db = [];

  for (let i = 0; i < amount; i++) {
    const user = new User(
      `Name${i + 1}`,
      `Surname${i + 1}`,
      Math.ceil(Math.random() * 100),
      Math.random() > 0.5
    );
    db.push(user);
  }
  return db;
}

const users = createRandomUsers(10);
console.table(users);

const userNames = users.map(function (user, index, arr) {
  return user.getFullName();
});
console.table(userNames);

const adultUser = users.filter(function (user) {
  return user.age >= 18;
});
console.table(adultUser);