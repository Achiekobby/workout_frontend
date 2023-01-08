import React, { useState } from "react";
import "../scss/WorkoutForm.scss";
import { useWorkoutsContext } from './../hooks/useWorkoutsContext';
const WorkoutForm = () => {

  const { dispatch} = useWorkoutsContext()

  //* states to handle the form inputs
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //* Default workout object to store the values of the form
    const workout = { title, load, reps };

    const response = await fetch("/api/workout", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      console.log("new workout has been added",json);
      dispatch({type:"CREATE_WORKOUT", payload:json})
    }
  };

  return (
    <div className="form_card">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1>Add New Workout Routine</h1>
          </div>
          <div className="workout_form">
            <form className="form" onSubmit={handleSubmit}>
              <div className="input_group">
                <label htmlFor="title">Workout Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Workout Title..."
                />
              </div>
              <div className="input_group">
                <label htmlFor="load">Load (in kg)</label>
                <input
                  type="number"
                  name="load"
                  id="load"
                  value={load}
                  onChange={(e) => setLoad(e.target.value)}
                  placeholder="Load in kg..."
                />
              </div>
              <div className="input_group">
                <label htmlFor="reps">Reps</label>
                <input
                  type="number"
                  name="reps"
                  id="reps"
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                  placeholder="Reps..."
                />
              </div>
              <button className="btn-button">
                Add Workout
              </button>
              {
                error &&
                <div className="errors">
                  <p>{error}</p>
                </div>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutForm;
