import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button.jsx";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome to CampusEats</h1>
      <p className="muted" style={{ marginBottom: "24px" }}>
        A modern campus food ordering system built with React and the latest web technologies.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
        <div className="card">
          <h3>📋 Browse Menu</h3>
          <p>Explore our delicious dishes from various outlets across campus.</p>
          <Button variant="primary" onClick={() => navigate("/menu")}>
            View Menu
          </Button>
        </div>

        <div className="card">
          <h3>🛒 Place Order</h3>
          <p>Submit your order details and place a food order easily.</p>
          <Button variant="primary" onClick={() => navigate("/order")}>
            Order Now
          </Button>
        </div>

        <div className="card">
          <h3>⚡ Fast & Easy</h3>
          <p>Quick search, real-time validation, and instant confirmation.</p>
          <Button variant="secondary" disabled>
            Explore Features
          </Button>
        </div>
      </div>

      <div style={{ marginTop: "40px", padding: "24px", backgroundColor: "#f0f9ff", borderRadius: "10px" }}>
        <h2>Features</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>✓ Feature-based folder structure (organized by domain)</li>
          <li>✓ Reusable UI components (Button, Card, Spinner, Modal)</li>
          <li>✓ Custom React hooks (useDebounce, useFetch)</li>
          <li>✓ Form validation with per-field error handling</li>
          <li>✓ Responsive grid layout for menu items</li>
          <li>✓ SLIIT navy & orange design language</li>
          <li>✓ Client state vs Server state separation</li>
          <li>✓ React Router with nested layouts</li>
        </ul>
      </div>
    </>
  );
}
