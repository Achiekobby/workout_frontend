import React from "react";
import "../scss/WorkoutForm.scss";
const WorkoutForm = () => {
  return (
    <div className="form_card">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1>Add New Workout Routine</h1>
          </div>
          <div className="workout_form">
            <form className="form">
              <div className="input_group">
                <label htmlFor="title">Workout Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Workout Title..."
                />
              </div>
              <div className="input_group">
                <label htmlFor="load">Load</label>
                <input
                  type="number"
                  name="load"
                  id="load"
                  placeholder="Load in kg..."
                />
              </div>
              <div className="input_group">
                <label htmlFor="reps">Reps</label>
                <input
                  type="number"
                  name="reps"
                  id="reps"
                  placeholder="Reps..."
                />
              </div>
              <button type="submit" className="btn-button">
                Add Workout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutForm;
