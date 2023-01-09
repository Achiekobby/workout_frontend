import React from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import "../scss/WorkoutCard.scss";
import { useWorkoutsContext } from './../hooks/useWorkoutsContext';
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const WorkoutCard = ({workouts }) => {

  const {dispatch} = useWorkoutsContext()

  //* Deleting a workout from the list
  const deleteWorkout = async(id)=>{
    const response = await fetch('/api/workout/'+id,{
      method: 'DELETE',
    })
    const json = await response.json()
    if(response.ok){
      console.log(json);
      dispatch({type:"DELETE_WORKOUT", payload: json.workout})
    }
  }
  return (
    <div className="workouts">
      {workouts &&
        workouts.map(workout => {
          const {_id, title, load, reps, createdAt } = workout;
          return (
            <div key={_id} className="workout-card">
              <div className="card_container">
                <div className="card_content">
                  <h3 className="workout_title">{title}</h3>
                  <div className="workout_specs">
                    <p>
                      Load: <span>{load}kg</span>
                    </p>
                    <p>
                      Reps: <span>{reps}</span>
                    </p>
                    <p>Created at: <span>{formatDistanceToNow(new Date(createdAt),{addSuffix:true})}</span></p>
                  </div>
                </div>
                <div className="actions">
                  <BiEdit className="edit" />
                  <RiDeleteBin5Line className="delete" onClick={()=>deleteWorkout(_id)} />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WorkoutCard;
