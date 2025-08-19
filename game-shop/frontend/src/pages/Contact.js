import Hero from "../components/Hero";

function Contact() {
  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="We’d love to hear from you!"
        image="https://images.unsplash.com/photo-1581091012184-5c1b44f4ef8d"
      />
      <section style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
        <h2>Get In Touch</h2>
        <p>Email: support@gameshop.com</p>
        <p>Phone: +123 456 7890</p>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
          <input type="text" placeholder="Your Name" style={{ padding: "10px" }} />
          <input type="email" placeholder="Your Email" style={{ padding: "10px" }} />
          <textarea placeholder="Your Message" style={{ padding: "10px", minHeight: "120px" }} />
          <button type="submit" style={{ padding: "12px", background: "#222", color: "white", border: "none", cursor: "pointer" }}>
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
export default Contact;
