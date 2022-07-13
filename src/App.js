import React from "react";
import Balance from './components/Balance'
import Form from './components/Form'
import Header from './components/Header'
import History from './components/History'
import IncomeExpense from './components/IncomeExpense'

import GlobalContextProvider from "./context/GlobalContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <ToastContainer />
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
    </>
  );
}

export default App;
