import React from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import "../scss/WorkoutCard.scss"
const WorkoutCard = () => {
  return (
    <div className="workouts">
<div className="workout-card">
      <div className="card_container">
        <div className="card_content">
          <h3 className="workout_title">Sample title</h3>
          <div className="workout_specs">
            <p>Load: <span>20kg</span></p>
            <p>Reps: <span>20kg</span></p>
          </div>
        </div>
        <div className="actions">
          <BiEdit className="edit" />
          <RiDeleteBin5Line className="delete" />
        </div>
      </div>
    </div>
    <div className="workout-card">
      <div className="card_container">
        <div className="card_content">
          <h3 className="workout_title">Sample title</h3>
          <div className="workout_specs">
            <p>Load: <span>20kg</span></p>
            <p>Reps: <span>20kg</span></p>
          </div>
        </div>
        <div className="actions">
          <BiEdit className="edit" />
          <RiDeleteBin5Line className="delete" />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default WorkoutCard;
