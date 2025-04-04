"use client";

const LoginButton = () => {
  const handleLogin = () => {
    // Redirect to your NestJS backend OAuth endpoint
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Sign in with Google
    </button>
  );
};

export default LoginButton;
