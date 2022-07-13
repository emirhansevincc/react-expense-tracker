import React from "react";
import Balance from './components/Balance'
import Form from './components/Form'
import Header from './components/Header'
import History from './components/History'
import IncomeExpense from './components/IncomeExpense'

function App() {
  return (
    <div>

      <Header />
      <div className="container">
        <div className="top-part">
          <div className="balance-part">
            <Balance />
            <IncomeExpense />
          </div>
          <Form />
        </div>
        <History />
      </div>
    </div>
  );
}

export default App;
