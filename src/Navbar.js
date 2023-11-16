import "./Navbar.css";

let onGoDashboard = () => {
  return;
};

let onGoChores = () => {
  return;
};

let onGoManagement = () => {
  return;
};

let onGoChat = () => {
  return;
};

let onGoPrivacy = () => {
  return;
};

let onGoInfo = () => {
  return;
};

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Dashboard">
        <img
          src={require("./assets/icons/dashboard-icon.png")}
          onClick={() => {
            onGoDashboard;
          }}
        />
      </div>
      <div className="Management">
        <img
          src={require("./assets/icons/house-icon.png")}
          onClick={() => {
            onGoManagement();
          }}
        />
      </div>
      <div className="Privacy">
        <img
          src={require("./assets/icons/privacy-icon.png")}
          onClick={() => {
            onGoPrivacy();
          }}
        />
      </div>
      <div className="Calendar">
        <img
          src={require("./assets/icons/contact-icon.png")}
          onClick={() => {
            onGoInfo();
          }}
        />
      </div>
      <div className="Chores">
        <img
          src={require("./assets/icons/broom-icon.png")}
          onClick={() => {
            onGoChores();
          }}
        />
      </div>
      <div className="Chat">
        <img
          src={require("./assets/icons/chat-icon.png")}
          onClick={() => {
            onGoChat();
          }}
        />
      </div>
    </div>
  );
}
