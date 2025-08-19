import Hero from "../components/Hero";

function About() {
  return (
    <div>
      <Hero
        title="About Us"
        subtitle="Passionate gamers bringing you the best titles."
        image="https://images.unsplash.com/photo-1617957741643-49b11a4bb3a7"
      />
      <section style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
        <h2>Who We Are</h2>
        <p>
          Game Shop is your trusted destination for video games, consoles,
          and accessories. We strive to deliver the best customer service and
          gaming experiences for players worldwide.
        </p>
      </section>
    </div>
  );
}
export default About;
