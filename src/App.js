// import CostItem from "./components/CostItem";
import Costs from "./components/Costs/Costs";

const App = () => {

  const costs = [
    {
      date: new Date (2021, 2, 12),
      description: `Fridge`,
      amount: 999.99
    },
    {
      date: new Date (2022, 2, 12),
      description: `Bread`,
      amount: 10.00
    },
    {
      date: new Date (2021, 1, 2),
      description: `Socks`,
      amount: 3.00
    }
  ];
  return (
    <div>
      <h1>Начнем изучение React</h1>
      
      <Costs costs = {costs}/>
      
    </div>
  );
}

export default App;
