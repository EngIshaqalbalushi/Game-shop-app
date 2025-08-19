import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Games from "./pages/Games";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";


function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/games")
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  return (
    <div>
      <h1>🎮 Game Shop</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {games.map(game => (
          <div key={game.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={game.image_url} alt={game.title} width="150" />
            <h3>{game.title}</h3>
            <p>{game.genre}</p>
            <p>${game.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
