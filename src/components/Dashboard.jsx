import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
   
  const {AllTransaction}= useSelector((state)=> state.Khatabook)

  const balance = AllTransaction.reduce((p, c) => p + c.amount, 0);

  const income = AllTransaction
    .filter((AllTransaction) => AllTransaction.amount > 0)
    .reduce((p, c) => p + c.amount, 0);

  const expense = AllTransaction
    .filter((AllTransaction) => AllTransaction.amount < 0)
    .reduce((p, c) => p + c.amount, 0);

  return (
    <div className="row g-3 my-3">
      <div className="col-md-4 col-sm-12">
        <div className="card p-3 bg-success text-light">
          <h1 className="display-5">Total Income : </h1>
          <h1 className="display-4">{income}</h1>
          
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="card p-3 bg-danger text-light">
          <h1 className="display-5">Total Expense : </h1>
          <h1 className="display-4">{expense}</h1>
         
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="card p-3 bg-warning text-light">
          <h1 className="display-5">Total Balance : </h1>
          <h1 className="display-4">{balance}</h1>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
