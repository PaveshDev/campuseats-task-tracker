import { useNavigate } from "react-router-dom";
import Card from "../../../components/ui/Card.jsx";
import Button from "../../../components/ui/Button.jsx";

function DishCard({ dish }) {
  const navigate = useNavigate();

  return (
    <Card>
      <h3>{dish.name}</h3>
      <div>
        <span className="badge">{dish.category}</span>
        {!dish.available && <span className="badge gray">Sold out</span>}
      </div>
      <p className="price">Rs. {dish.price.toFixed(2)}</p>
      <p className="muted">{dish.outlet || "Main Campus"}</p>
      {dish.available ? (
        <Button variant="primary" onClick={() => navigate(`/dish/${dish.id}`)} style={{ width: "100%", marginTop: "8px" }}>
          Order
        </Button>
      ) : (
        <Button variant="secondary" disabled style={{ width: "100%", marginTop: "8px" }}>
          Not Available
        </Button>
      )}
    </Card>
  );
}

export default DishCard;