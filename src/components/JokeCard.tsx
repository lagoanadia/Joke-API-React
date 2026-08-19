import {useState} from "react";
import { useEffect } from "react";

interface Joke {
    "type": string,
    "setup": string
    "punchline": string
    "id": number
}

function JokeCard(){
   const[joke, setJoke] = useState <Joke | null>(null);
   const[loading, setLoading] = useState <boolean> (true);
   const[error, setError] = useState <boolean> (false);
    
 
  
const getJoke = async () => {
  setLoading(true);
  setError(false);
  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!res.ok) throw new Error("Failed");
    const data = await res.json();
    setJoke(data);
  } catch (err) {
    setError(true);
  } finally {
    setLoading(false); // Runs whether it succeeded or failed
  }
};

useEffect(()=>{getJoke()},[])




return (
    <>
      <div className="jkcard">
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <>
            <p>no jokes found</p>
            <p>try again later!</p>
          </>
        ) : (
          <>
            <p>{joke?.setup}</p>
            <em>{joke?.punchline}</em>
          </>
        )}
      </div>
    </>
  );
} export default JokeCard
