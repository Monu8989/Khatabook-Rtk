import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

const ListGroup = () => {

  const { AllTransaction, loading, error } = useSelector((state) => state.Khatabook);

  if (loading) {
    return <div>Loading...</div>;
  }


  
  return (
    <ul className="list-group my-2">
       
       {Array.isArray(AllTransaction) && AllTransaction.length > 0 ? (
        AllTransaction.map((Tran) => <ListItem key={Tran.id} Tran={Tran} />)
      ) : (
        <li className="list-group-item text-center bg-danger rounded-2 my-5 text-light">No Transactions available</li>
      )}
         
       
     
    </ul>
  );
};

export default ListGroup;
