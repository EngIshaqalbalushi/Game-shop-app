import Hero from "../components/Hero";

function Services() {
  return (
    <div>
      <Hero
        title="Our Services"
        subtitle="From sales to support, we’ve got you covered."
        image="https://images.unsplash.com/photo-1606813909355-2b7e00c248cc"
      />
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>What We Offer</h2>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "1.2rem" }}>
          <li>🎮 Game Sales</li>
          <li>🚚 Fast & Reliable Delivery</li>
          <li>💳 Secure Online Payments</li>
          <li>📞 24/7 Customer Support</li>
        </ul>
      </section>
    </div>
  );
}
export default Services;
