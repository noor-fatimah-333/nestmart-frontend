import { useEffect } from "react";

export default function Auth() {
  useEffect(() => {
    if (process.env.REDIRECT_URL) {
      console.log("redirect url", process.env.REDIRECT_URL);
      window.location.href = process.env.REDIRECT_URL; // Redirects to Google OAuth
    }
  }, []);
  return <div>Auth</div>;
}
