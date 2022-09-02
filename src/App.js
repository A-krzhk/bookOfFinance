// import CostItem from "./components/CostItem";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";
import React, { useState} from "react";

const INITIAL_COSTS = [
  {
    date: new Date (2021, 2, 12),
    description: `Fridge`,
    amount: 999.99,
    id: `1661953195782`
  },
  {
    date: new Date (2022, 2, 12),
    description: `Bread`,
    amount: 10.00,
    id: `1661353194043`
  },
  {
    date: new Date (2021, 1, 2),
    description: `Socks`,
    amount: 3.00,
    id: `1661953188255`
  }
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);
  const addCostHandler = (cost) => {
    setCosts(prevCosts => [cost, ...prevCosts]);
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      
      <Costs costs = {costs}/>
      
    </div>
  );
}

export default App;
