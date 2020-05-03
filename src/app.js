import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { BrowserRouter, Route } from "react-router-dom";

const ExpenseDashboardPage = () => <div>Dashboard</div>;
const AddExpensePage = () => <div>Add Expense</div>;
const EditExpensePage = () => <div>Edit</div>;
const HelpPage = () => <div>Help</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
