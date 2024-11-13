import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit, remove } from "../features/slice";

const ListItem = ({Tran}) => {

  const dispatch = useDispatch()

  const handleEdit = (Transaction) => {
     dispatch(edit(Transaction))
  };

  const removeTransaction = (id) => {
   dispatch(remove(id))
  };




  return (
    <li className="list-group-item">
      <h1 className="display-6">{Tran.amount}</h1>
      <p>{Tran.text}</p>
      <span className="float-end">
        <button
          className="btn btn-warning btn-sm mx-1"
          onClick={() => handleEdit(Tran)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm mx-1"
          onClick={() => removeTransaction(Tran.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
