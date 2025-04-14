"use client";

import { useEffect, useState } from "react";

const LoginButton = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const backendUrl = process.env.REDIRECT_URL;

  const fetchUser = async () => {
    console.log("fetching user details : ");
    try {
      const res = await fetch("/auth/me", { credentials: "include" });
      const data = await res.json();
      if (data.user) {
        setUser(data.user);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const handleLogin = () => {
    if (!backendUrl) {
      console.error("Backend URL not set");
      return;
    }
    window.location.href = `${backendUrl}/auth/google`;
    fetchUser();
  };

  const handleLogout = async () => {
    if (!backendUrl) {
      console.error("Backend URL not set");
      return;
    }
    await fetch(`${backendUrl}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {user && user.name ? (
        <div className="text-center">
          <p className="text-lg mb-2">Welcome, {user.name} 👋</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded-lg shadow-md transition-transform hover:scale-105"
          >
            🚪 Logout
          </button>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
        >
          🚀 Sign in with Google
        </button>
      )}
    </>
  );
};

export default LoginButton;
