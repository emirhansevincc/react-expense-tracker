import React from "react";
import Balance from './components/Balance'
import Form from './components/Form'
import Header from './components/Header'
import History from './components/History'
import IncomeExpense from './components/IncomeExpense'

import GlobalContextProvider from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
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
    </GlobalContextProvider>
  );
}

export default App;
