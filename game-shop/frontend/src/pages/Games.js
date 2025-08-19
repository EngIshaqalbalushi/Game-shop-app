import { useEffect, useState } from "react";
import Hero from "../components/Hero";

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/games")
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  return (
    <div>
      <Hero
        title="Shop Games"
        subtitle="Explore our wide collection of games."
        image="https://images.unsplash.com/photo-1606813909119-0d9a4a30b3cf"
      />

      <section style={{ padding: "40px" }}>
        <h2 style={{ textAlign: "center" }}>Available Games</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>
          {games.map(game => (
            <div key={game.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px", textAlign: "center" }}>
              <img src={game.image_url} alt={game.title} width="200" style={{ borderRadius: "8px" }} />
              <h3>{game.title}</h3>
              <p>{game.genre}</p>
              <p><b>${game.price}</b></p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Games;
