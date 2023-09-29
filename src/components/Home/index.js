import React, { Fragment } from "react";

export default function Home(){
    const sign = 40 < 0 ? "-" : "+";
    return(
    <Fragment>
        <div className="container">
    <h4>Your Balance</h4>
      <h1 id="balance">${5000}</h1>
      
      
      <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ${150000}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ${30000}
        </p>
      </div>
    </div>
      
      <div>
      <h3>History</h3>
      <ul id="list" className="list">
    {  Array.from({length: 10}, () =>
    //  index + 1
    <li className={500 < 0 ? "minus" : "plus"}>
    Camera
    <span>
      {sign}$500
    </span>
    <button
      className="delete-btn"
      // onClick={() => deleteTransaction(transaction.id)}
    >
      x
    </button>
  </li>
     )
     
     }
    
        
        </ul>
      </div>
      
      <div>
      <h3>Add new transaction</h3>
      <form id="form" 
    //   onSubmit={onSubmit}
      >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            // value={text}
            // onChange={(e) => setText(e.target.value)}
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            // value={amount}
            // onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      </div>
      
      </div>





    </Fragment>
        )


}