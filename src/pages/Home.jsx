import React, { useEffect} from "react";
import "../scss/Home.scss";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";
import Navbar from './../components/Navbar';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import useAuthContext from './../hooks/useAuthContext';

const Home = () => {
  const {workouts,dispatch} = useWorkoutsContext()

  const {user} = useAuthContext()
  //* fetching all workouts from the api
  useEffect(() => {

    const fetch_workouts = async()=>{
      const response = await fetch('/api/workouts',{
        headers:{
          'Authorization':`Bearer ${user.token}`
        }
      })
      const json = await response.json();

      if(response.ok){
        dispatch({type:"SET_WORKOUTS", payload: json.workouts})
      }
    }
    if(user){
      fetch_workouts()
    }
  }, [dispatch, user])
  
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
