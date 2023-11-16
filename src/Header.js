import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <img
        className="Profile"
        src={require("./assets/temp/redwiz.png")}
        alt="Profile Image"
      />

      <div className="CovenHeader">coven</div>

      <button className="SignOut">Sign Out</button>
    </div>
  );
}
