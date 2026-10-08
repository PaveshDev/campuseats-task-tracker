import { useState } from "react";
import Button from "../../../components/ui/Button.jsx";
import TextField from "../../../components/ui/TextField.jsx";

function OrderPage() {
  const [form, setForm] = useState({ name: "", email: "", qty: 1 });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  
  function validate(v) {
    const e = {};
    if (v.name.trim().length < 2) e.name = "Name too short";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email))
      e.email = "Enter a valid email";
    if (Number(v.qty) < 1) e.qty = "Qty must be ≥ 1";
    return e;
  }
  
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({});
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length === 0) setDone(true);
  }
  
  if (done) {
    return (
      <>
        <h2>Order Confirmation</h2>
        <div className="alert success" style={{ marginTop: "16px" }}>
          ✓ Thanks, {form.name}! Your order has been received.
        </div>
        <p style={{ marginTop: "16px" }}>
          <Button variant="secondary" onClick={() => {
            setDone(false);
            setForm({ name: "", email: "", qty: 1 });
          }}>
            Place Another Order
          </Button>
        </p>
      </>
    );
  }
  
  return (
    <>
      <h2>Place an Order</h2>
      <div className="form-card" style={{ marginTop: "24px" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            error={errors.name}
          />
          
          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            error={errors.email}
          />
          
          <TextField
            label="Quantity"
            name="qty"
            type="number"
            value={form.qty}
            onChange={handleChange}
            min="1"
            error={errors.qty}
          />
          
          <div style={{ marginTop: "24px", display: "flex", gap: "8px" }}>
            <Button variant="primary" type="submit">
              Place Order
            </Button>
            <Button variant="secondary" type="button" onClick={() => {
              setForm({ name: "", email: "", qty: 1 });
              setErrors({});
            }}>
              Clear
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default OrderPage;