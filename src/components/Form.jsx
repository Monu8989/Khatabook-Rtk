import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update } from "../features/slice";

const Form = () => {
  const { edit } = useSelector((state) => state.Khatabook);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    !edit.isedit ? dispatch(add({ id: crypto.randomUUID(), text: text, amount: +amount })):
    dispatch(update({id : edit.Transaction.id ,text: text, amount: +amount }))

    setText("");
    setAmount("");
  };

  useEffect(() => {
     setText(edit.Transaction.text)
     setAmount(edit.Transaction.amount)
  }, [edit]);

  return (
    <div className="card p-3">
      <h1 className="text-center">Enter Your Transactions </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="form-control my-2"
          type="text"
          placeholder="Enter Transaction Name"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <input
          className="form-control my-2"
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn btn-success w-100">Submit</button>
      </form>
    </div>
  );
};

export default Form;
