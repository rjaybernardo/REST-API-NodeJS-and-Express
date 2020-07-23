import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [
  // {
  //   firstName: "Renielle",
  //   lastName: "Bernardo",
  //   age: 8,
  // },
  // {
  //   firstName: "Raphael Jay",
  //   lastName: "Bernardo",
  //   age: 36,
  // },
];

router.get("/", (req, res) => {
  console.log(users);

  res.send(users);
});

router.post("/", (req, res) => {
  // console.log("POST ROUTE REACHED");

  // console.log(req.body);
  // object is stored in the req.body

  const user = req.body;

  // const userId = uuidv4();
  // const userWithId = { ...user, id: userId };

  // users.push(user);
  users.push({ ...user, id: uuidv4() });

  // res.send("POST ROUTE REACHED");
  res.send(`User with the name ${user.firstName} added to the Database`);
});

// Get specific user
// we need id a unique id
router.get("/:id", (req, res) => {
  // res.send("GET ID ROUTE");

  // const id = req.params.id
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  // res.send(req.params);
  res.send(foundUser);

  console.log(req.params);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  // filter function if TRUE it keeps it in th array
  // we keep the user except the id we want to delete
  users = users.filter((user) => user.id !== id);

  res.send(`User with the ${id} deleted from the database`);
});

// Change User Details
// PATCH request - partial modification
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  // if (firstName) {
  //   user.firstName = firstName;
  // }

  // if (lastName) {
  //   user.lastName = lastName;
  // }

  // if (age) {
  //   user.age = age;
  // }

  //find the user i to be updated
  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated`);
});

export default router;
