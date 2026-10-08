import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";
import Button from "../../../components/ui/Button.jsx";
import TextField from "../../../components/ui/TextField.jsx";
import Spinner from "../../../components/ui/Spinner.jsx";

function DishDetailPage() {
 const apiUrl = import.meta.env.VITE_API_URL
   ? `${import.meta.env.VITE_API_URL}/api/menu`
   : "/menu.json";

 const { data: dishes, isLoading, error } = useFetch(apiUrl);
 const [form, setForm] = useState({ name: "", email: "", qty: 1 });
 const [errors, setErrors] = useState({});
 const [done, setDone] = useState(false);

 const dish = dishes?.find((item) => String(item.id) === String(id));

 function validate(values) {
   const validation = {};
   if (values.name.trim().length < 2) validation.name = "Name too short";
   if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
     validation.email = "Enter a valid email";
   }
   if (Number(values.qty) < 1) validation.qty = "Qty must be ≥ 1";
   return validation;
 }

 function handleChange(e) {
   setForm({ ...form, [e.target.name]: e.target.value });
   setErrors({});
 }

 function handleSubmit(e) {
   e.preventDefault();
   const validation = validate(form);
   setErrors(validation);
   if (Object.keys(validation).length === 0) {
     setDone(true);
   }
 }

 if (isLoading) {
   return <Spinner label="Loading dish details…" />;
 }

 if (error) {
   return <div className="alert error">Could not load dish: {error}</div>;
 }

 if (!dish) {
   return (
     <div className="alert info">
       No dish found for ID {id}. <Link to="/menu">← Back to menu</Link>
     </div>
   );
 }

 if (done) {
   return (
     <>
       <h2>Order Confirmation</h2>
       <div className="alert success" style={{ marginTop: "16px" }}>
         ✓ Thanks, {form.name}! Your order for {form.qty} × {dish.name} has been received.
       </div>
       <p style={{ marginTop: "16px" }}>
         <Button
           variant="secondary"
           onClick={() => {
             setDone(false);
             setForm({ name: "", email: "", qty: 1 });
           }}
         >
           Place Another Order
         </Button>
       </p>
     </>
   );
 }

 return (
   <>
     <h2>{dish.name}</h2>
     <p className="muted">Category: {dish.category}</p>
     <p className="price">Rs. {dish.price.toFixed(2)}</p>
     <p>{dish.available ? "Available now" : "Currently sold out"}</p>
     <div style={{ marginTop: "24px" }}>
       <form onSubmit={handleSubmit} className="form-card">
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
           min="1"
           value={form.qty}
           onChange={handleChange}
           error={errors.qty}
         />

         <div style={{ marginTop: "24px", display: "flex", gap: "8px" }}>
           <Button variant="primary" type="submit">
             Checkout
           </Button>
           <Button
             variant="secondary"
             type="button"
             onClick={() => {
               setForm({ name: "", email: "", qty: 1 });
               setErrors({});
             }}
           >
             Clear
           </Button>
         </div>
       </form>
     </div>

     <p style={{ marginTop: "16px" }}>
       <Link to="/menu">← Back to menu</Link>
     </p>
   </>
 );
}
export default DishDetailPage;