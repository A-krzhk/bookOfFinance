import "./Costs.css"
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
    const [selectedYear, setSelectedYear] = useState(`2022`);
    const changeYearHandler = (year) => {
        setSelectedYear(year);
    }
    
    const filtered = props.costs.filter(item => item.date.getFullYear().toString() === selectedYear);
    
    return (
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={changeYearHandler} />
            <CostsDiagram costs={filtered}/>
            <CostList costs={filtered}/>
        </Card>
    );
    
}

export default Costs;