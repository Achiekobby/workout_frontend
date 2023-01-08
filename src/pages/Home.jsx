import React, {useState, useEffect} from "react";
import "../scss/Home.scss";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";
import Navbar from './../components/Navbar';
const Home = () => {

  //* setting a state to manage the data collected from the api
  const[workouts, setWorkouts] = useState(null)

  //* fetching all workouts from the api
  useEffect(() => {
    const fetch_workouts = async()=>{
      const response = await fetch('/api/workouts')
      const json = await response.json();

      if(response.ok){
        setWorkouts(json.workouts)
      }
    }
    fetch_workouts()
  }, [])
  
  return (
    <>
    <Navbar />
    <div className="home">
      <div className="container">
        <div className="wrapper">
          {/* List of all the items from the workouts */}
            <WorkoutCard workouts = {workouts} />
            <WorkoutForm />
        </div>
      </div>
    </div>
    </>

  );
};

export default Home;
