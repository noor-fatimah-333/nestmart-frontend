"use client";

const LoginButton = () => {
  const backendUrl = process.env.REDIRECT_URL;

  const handleLogin = () => {
    if (!backendUrl) {
      console.error("Backend URL is not defined in environment variables.");
      return;
    }
    window.location.href = `${backendUrl}/auth/google`;
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
    >
      🚀 Sign in with Google
    </button>
  );
};

export default LoginButton;
