import DishCard from "./DishCard";

function MenuList({ dishes }) {
 if (!dishes || dishes.length === 0) {
   return <div className="alert info">No dishes match your search.</div>;
 }
 
 return (
   <div className="grid">
     {dishes.map((dish) => (
       <DishCard key={dish.id} dish={dish} />
     ))}
   </div>
 );
}

export default MenuList;