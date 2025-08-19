import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero
        title="Welcome to Game Shop 🎮"
        subtitle="Discover the latest games at unbeatable prices!"
        image="https://images.unsplash.com/photo-1605902711622-cfb43c44367f"
      />
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>🔥 Featured Games</h2>
        <p>Check out our top-selling games and exclusive offers.</p>
      </section>
    </div>
  );
}
export default Home;
