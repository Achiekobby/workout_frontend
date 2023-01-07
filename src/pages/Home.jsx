import React from "react";
import "../scss/Home.scss";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";
import Navbar from './../components/Navbar';
const Home = () => {
  return (
    <>
    <Navbar />
    <div className="home">
      <div className="container">
        <div className="wrapper">
          {/* List of all the items from the workouts */}
            <WorkoutCard />
            <WorkoutForm />
        </div>
      </div>
    </div>
    </>

  );
};

export default Home;
