import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./component/Nav";
import Add_trainer from "./component/Add_trainer";
import Get_trainer from "./component/Get_trainer";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [trainer, setTrainer] = useState([]);

  useEffect(() => {
    const fetch_trainers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/trainer/");
        setTrainer(response.data);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };
    fetch_trainers();
  }, []);

  const handle_AddTrainer = (newTrainer) => {
    setTrainer([...trainer, newTrainer]);
  };

  const handleDeleteTrainer = async (trainerId) => {
    try {
      await axios.delete(`http://localhost:3000/api/trainers/${trainerId}`);
      setTrainer(trainer.filter((t) => t._id !== trainerId));
    } catch (error) {
      console.error("Error deleting trainer:", error);
    }
  };

  return (
    <BrowserRouter>
      <div className="container">
        <h1>Trainer Management</h1>
        <nav>
          <div>
            <p>click here to view trainer</p>
            <Link to="/">Trainer List</Link> |{" "}
          </div>

          <div>
            <p>click here to add trainer</p>
            <Link to="/add-trainer">Add Trainer</Link>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <Get_trainer
                trainers={trainer}
                onDeleteTrainer={handleDeleteTrainer}
              />
            }
          />
          <Route
            path="/add-trainer"
            element={<Add_trainer onAddTrainer={handle_AddTrainer} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
