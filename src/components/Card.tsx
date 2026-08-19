
import JokeCard from "./JokeCard";

function Card(){


    return(
        <>
        <div className="card">
        <h1>Daily chuckle</h1>
        <JokeCard/>
        <p className="foot">reload the page for another joke!</p>
        </div>
        </>
      
    )
}
export default Card;