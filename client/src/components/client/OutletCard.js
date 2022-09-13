import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';

const OutletCard = () => {
  let id = 1;
  return (
    <>
      <div>Outlet card</div>
      <button>
        <Link to={`/outlet/${id}`}>View outlet</Link>
      </button>
      <Rating></Rating>
    </>
  );
};

export default OutletCard;
