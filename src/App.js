import React from "react";
import ReactDOM from "react-dom/client";
import Question from "./Component/Question";
import Header from "./Component/Header";

const App =()=>{
    return(
        <div>
            <Header/>
            <Question/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)