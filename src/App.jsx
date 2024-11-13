import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import ListGroup from "./components/ListGroup";

const App = () => {
  

  const addTransaction = (text, amount) => {

  };

 
 

  const updateTransaction = (updatedTransaction) => {
  
  };

  return (
    <>
      <Navbar />
      <div className="container p-5">
        <Form
         
        />
        <Dashboard  />  
        
        <ListGroup
     
        />
      </div>
    </>
  );
};

export default App;
