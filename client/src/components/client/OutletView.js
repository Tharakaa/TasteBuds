import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";

const OutletView = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <>
      <div>Outlet View</div>
      <ItemCard></ItemCard>
    </>
  );
};

export default OutletView;
