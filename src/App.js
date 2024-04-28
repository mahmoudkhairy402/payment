import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, startTransition, Suspense } from "react";

import Dashboard from "./pages/Dashboard/dashboard";
import Payment from "./pages/payment/payment";
import Verify from "./pages/payment/secondStep/secondStep";
import Acount from "./pages/payment/accounting/account";
import Payverification from "./pages/payment/payAuth/payauth";
import Navbar from "./components/navbar/navbar";

//! Redux
import store from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="app">
      <Suspense
        fallback={
          <div
            style={{ height: "100vh" }}
            className="d-flex justify-content-between align-items-center"
          >
            ...loading
          </div>
        }
      >
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              {["dashboard", "/"].map((path, index) => (
                <Route path={path} element={<Dashboard />} key={index} />
              ))}
              <Route path="payment/*" element={<Payment />} />{" "}
              <Route path="/payment/verify" element={<Verify />} />
              <Route
                path="/payment/payverification"
                element={<Payverification />}
              />
              <Route path="/payment/acounting" element={<Acount />} />
              {/* <Route path="/recipes" element={<Recipes />} />
                <Route path="/users" element={<Users />} />
                <Route path="/" element={<DefaultDash />} /> */}
              <Route path="*" element={<Dashboard />} />{" "}
            </Routes>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
