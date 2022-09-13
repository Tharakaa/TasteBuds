import { Link } from "react-router-dom";

const ItemCard = () => {
  return (
    <>
      <div>Item card</div>
      <button>
        <Link to="/outlet/1">View Item</Link>
      </button>
    </>
  );
};

export default ItemCard;
