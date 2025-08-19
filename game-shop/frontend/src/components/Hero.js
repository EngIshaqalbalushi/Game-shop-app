function Hero({ title, subtitle, image }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}

export default Hero;
