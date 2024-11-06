import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MainApp from "./components/MainApp";
import Auth from "./components/Auth";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const ADMIN_UID = "YOUR_ADMIN_UID"; // Replace with my admin UID
  const isAdmin = user && user.uid === ADMIN_UID;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Auth user={user} setUser={setUser} />} />
        <Route
          path="/app"
          element={
            user ? (
              <MainApp user={user} isAdmin={isAdmin} />
            ) : (
              <p>Please sign in to access the app.</p>
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
