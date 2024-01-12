import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import UserProfileForm from "./components/UserProfileForm";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Divyam",
      desc: "A student at UTD",
      socials: {
        Linkedin: "https://www.linkedin.com/in/divyampatro/",
        Github: "https://github.com/f2015537",
      },
      interests: ["Hiking", "CP", "Reading novels", "Gaming"],
    },
    {
      name: "Navaneeth",
      desc: "A student at UTD",
      socials: {
        Linkedin: "https://www.linkedin.com/in/divyampatro/",
        Github: "https://github.com/Nava308",
      },
      interests: [
        "Exploring tech stacks",
        "Watching Big Boss",
        "Watching movies",
      ],
    },
  ]);
  return (
    <>
      <UserProfileForm setUsers={setUsers} />
      {users.map((user, i) => (
        <Card
          key={i}
          name={user.name}
          desc={user.desc}
          socials={user.socials}
          interests={user.interests}
        />
      ))}
    </>
  );
}

export default App;
