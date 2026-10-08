import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";
import MenuList from "../components/MenuList";
import Spinner from "../../../components/ui/Spinner";

function MenuPage() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 400);
  
  const apiUrl = import.meta.env.VITE_API_URL
    ? `${import.meta.env.VITE_API_URL}/api/menu`
    : "/menu.json";

  const { data: dishes, isLoading, error } = useFetch(apiUrl);
  
  const filtered = dishes && dishes.filter((d) =>
    d.name.toLowerCase().includes(debounced.toLowerCase())
  );
  
  return (
    <>
      <h2>Menu</h2>
      
      <div className="toolbar">
        <input
          placeholder="Search dishes…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      
      {isLoading && <Spinner label="Loading menu…" />}
      {error && <div className="alert error">Could not load menu: {error}</div>}
      {dishes && <MenuList dishes={filtered} />}
    </>
  );
}

export default MenuPage;