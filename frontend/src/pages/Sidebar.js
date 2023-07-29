import React, { useState } from "react";
import "./sidebar.css";
import CloseIcon from "../images/Icons/close";
import GroceriesIcon from "../images/Icons/groceries";
import DiningIcon from "../images/Icons/dining";
import EntertainmentIcon from "../images/Icons/entertainment";
import ClothingIcon from "../images/Icons/clothing";
import SubscriptionIcon from "../images/Icons/subscription";
import UtilitiesIcon from "../images/Icons/utilities";
import MediaclIcon from "../images/Icons/medical";
import TransportationIcon from "../images/Icons/transportation";
import HousingIcon from "../images/Icons/housing";
import ExpenseForm from "./expenseForm";
import BudgetForm from "./budgetForm";
import GoalForm from "./goalForm";
import { useDispatch } from "react-redux";
import { setSidebar } from "../reducers/dashboardSlice.js";

const Sidebar = () => {
  const dispatch = useDispatch();

  //declare the three states for expense, goal, and budget selections
  const [expenseSelection, setExpenseSelection] = useState(true);
  const [budgetSelection, setBudgetSelection] = useState(false);
  const [goalSelection, setGoalSelection] = useState(false);

  //handle onClick event when expense/goal/ or budget is clicked
  const handleSideBarSelection = (value) => {
    const selected = value;
    value === "expense"
      ? setExpenseSelection(true)
      : setExpenseSelection(false);
    value === "budget" ? setBudgetSelection(true) : setBudgetSelection(false);
    value === "goal" ? setGoalSelection(true) : setGoalSelection(false);
  };

  return (
    <div className="Sidebar">
      <div className="closed-button">
        <button onClick={() => dispatch(setSidebar(false))} id="close-button">
          <CloseIcon />
        </button>
      </div>
      <div className=""></div>
      <div className="sidebar-content">
        <div className="sidebar-selection">
          <button
            className="expense"
            value="expense"
            onClick={(e) => handleSideBarSelection(e.target.value)}
          >
            Expense
          </button>
          <button
            className="budget"
            value="budget"
            onClick={(e) => handleSideBarSelection(e.target.value)}
          >
            Budget
          </button>
          <button
            className="goal"
            value="goal"
            onClick={(e) => handleSideBarSelection(e.target.value)}
          >
            Goal
          </button>
        </div>
        {expenseSelection && <ExpenseForm />}
        {budgetSelection && <BudgetForm />}
        {goalSelection && <GoalForm />}
      </div>
    </div>
  );
};
export default Sidebar;
