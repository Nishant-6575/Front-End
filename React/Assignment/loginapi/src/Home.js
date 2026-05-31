import React from "react";
import { useAuth } from "./AuthContext";

export default function Home() {
  const { user, login, logout } = useAuth();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please Log In</h2>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}