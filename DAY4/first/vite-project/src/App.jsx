import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./component/Nav";
import Add_trainer from "./component/Add_trainer";
import Get_trainer from "./component/Get_trainer";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [trainer, settrainer] = useState;

  useEffect(() => {
    const fetch_trianers = async () => {
      try {
        const respose = await axios.get("http://localhost:3000/api/trainer/");
        settrainer(respose.data);
      } catch (error) {
        console.error(`error in fetching`, error);
      }
    };
  });

  return (
    <>
      <Add_trainer />
      <Get_trainer />
    </>
  );
}

export default App;
