import { useState } from "react";
import Style from "./Add_trainer.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Add_trainer() {
  const [trainer_name, settrainer_name] = useState("");
  const [trainer_phno, settrainer_phno] = useState("");
  const [trainer_location, settrainer_location] = useState("");
  const [trainer_skills, settrainer_skills] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className={Style.container}>
        <h4 class="mb-3">Trainers Details</h4>
        <form class="needs-validation" novalidate>
          <div class="col-sm-6">
            <label for="firstName" class="form-label">
              Name:
            </label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder=""
              value={trainer_name}
              onClick={(e) => settrainer_name(e.target.value)}
              required
            />
            <div class="invalid-feedback">Valid first name is required.</div>
          </div>

          <div class="col-sm-6">
            <label for="lastName" class="form-label">
              Phone Number:
            </label>
            <input
              type="number"
              class="form-control"
              id="phno"
              placeholder=""
              value={trainer_phno}
              onClick={(e) => settrainer_phno(e.target.value)}
              required
            />
            <div class="invalid-feedback">Valid Phone Number is required.</div>
          </div>

          <div class="col-12">
            <label for="username" class="form-label">
              Location:
            </label>
            <div class="input-group has-validation">
              <span class="input-group-text">@</span>
              <input
                type="text"
                class="form-control"
                id="location"
                placeholder="location"
                value={trainer_location}
                onClick={(e) => settrainer_location(e.target.value)}
                required
              />
              <div class="invalid-feedback">Your location is required.</div>
            </div>
          </div>

          <div class="col-12">
            <label for="address" class="form-label">
              Skills:
            </label>
            <input
              type="text"
              class="form-control"
              id="address"
              value={trainer_skills}
              onClick={(e) => settrainer_skills(e.target.value)}
              placeholder="Mern"
              required
            />
          </div>

          <button class="btn btn-primary btn-lg" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}
export default Add_trainer;
