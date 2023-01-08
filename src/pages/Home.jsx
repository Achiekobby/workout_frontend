import React, { useEffect} from "react";
import "../scss/Home.scss";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";
import Navbar from './../components/Navbar';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
  const {workouts,dispatch} = useWorkoutsContext()

  //* fetching all workouts from the api
  useEffect(() => {

    const fetch_workouts = async()=>{
      const response = await fetch('/api/workouts')
      const json = await response.json();

      if(response.ok){
        dispatch({type:"SET_WORKOUTS", payload: json.workouts})
      }
    }
    fetch_workouts()
  }, [dispatch])
  
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
