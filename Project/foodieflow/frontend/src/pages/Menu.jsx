import { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/food")
      .then(res => setFood(res.data));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {food.map(item => (
        <div key={item._id} className="border p-4 rounded">
          <img src={item.image} />
          <h2>{item.name}</h2>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;