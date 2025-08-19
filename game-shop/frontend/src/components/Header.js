import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ background: "#222", color: "#fff", padding: "15px 30px" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>🎮 Game Shop</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link>
          <Link style={{ color: "white", textDecoration: "none" }} to="/about">About</Link>
          <Link style={{ color: "white", textDecoration: "none" }} to="/services">Services</Link>
          <Link style={{ color: "white", textDecoration: "none" }} to="/games">Games</Link>
          <Link style={{ color: "white", textDecoration: "none" }} to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
