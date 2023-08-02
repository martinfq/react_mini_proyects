import { Link } from "react-router-dom";

export default function Navbar(){
    const linkStyle = {
        padding: "10px",
        display: "block",
        fontSize: "18px",
        color: "white"
      };
    
      const navContainerStyle = {
        backgroundColor: "#181d27",
        padding: "10px",
        display: "flex",
        gap: "5px",
        justifyContent: "center",
      };
    
    return <div>
        <div style={navContainerStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>

      <Link to="/create" style={linkStyle}>
        Create
      </Link>
    </div>
    </div>
}