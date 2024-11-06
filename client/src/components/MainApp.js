import React from "react";

const MainApp = ({ user, isAdmin }) => {
  return (
    <div>
      <h2>Welcome, {user.displayName}</h2>
      <p>This is the main app area where you can add content and features.</p>
      {isAdmin && <p>You have admin privileges.</p>}
    </div>
  );
};

export default MainApp;
