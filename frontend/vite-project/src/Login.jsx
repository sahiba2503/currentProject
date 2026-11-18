
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      // Send login request to backend
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      // Convert response into JSON
      const data = await response.json();

      // Check for unsuccessful login
      if (!response.ok) {
        setMessage(data.message || "Invalid email or password");
        return;
      }

      // Login successful
      setMessage(data.message || "Login successful!");

      // Navigate to dashboard
      navigate("/dashboard");

    } catch (error) {
      console.log("Login error:", error);
      setMessage("Server connection failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="outer-container">
      <form className="form-container" onSubmit={handleLogin}>

        <h2>Welcome Back!</h2>
        <p>Please login to your account</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="message">{message}</p>

      </form>
    </div>
  );
}

export default Login;
