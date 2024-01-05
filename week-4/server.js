const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

// Predefined collection of todos
const todosCollection = [
  { id: "todo1", title: "Go for a run", description: "A task to stay active" },
  { id: "todo2", title: "Read a book", description: "Dive into a new world" },
  {
    id: "todo3",
    title: "Learn a new skill",
    description: "Expand your knowledge",
  },
  {
    id: "todo4",
    title: "Cook a new recipe",
    description: "Culinary adventure",
  },
  {
    id: "todo5",
    title: "Write in a journal",
    description: "Reflect on your day",
  },
  { id: "todo6", title: "Watch a movie", description: "Entertainment time" },
];

// API endpoint that returns todos in increasing order of ID every 2 seconds
app.get("/api/todos", (req, res) => {
  // Determine the number of todos to return (random number between 1 and the total number of todos)
  const numberOfTodos = Math.floor(Math.random() * todosCollection.length) + 1;

  // Shuffle the todos collection to get a random order
  const shuffledTodos = todosCollection.sort(() => Math.random() - 0.5);

  // Select a random subset of todos
  const randomSubset = shuffledTodos.slice(0, numberOfTodos);

  // Sort the random subset based on the IDs
  const sortedSubset = randomSubset.sort((a, b) => a.id.localeCompare(b.id));

  // Delay the response by 2 seconds
  // setTimeout(() => {
  res.json(sortedSubset);
  // }, 2000);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
