///object inside array
//very useful in real world application

const users = [
  {
    id: 1,
    name: "sonu singh",
    roll: "5e43",
  },
  {
    id: 3,
    name: "kiran singh",
    roll: "543d",
  },
  {
    id: 4,
    name: "asha singh",
    roll: "5e3d",
  },
];

for (let user of users) {
  console.log(user);
  console.log(user.name);
}

//nested destructuring
const [user1, user2, user3] = users;
console.log(user1);
const [{ roll }, , { name }] = users;
console.log(roll);
console.log(name);
