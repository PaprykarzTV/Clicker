import { useMainGameContext } from "../contexts/MainGameContext";

export default function ScoreTitle() {

    const {score} = useMainGameContext();
    
    return (
        <>
            <h1 style={{display: "flex" , alignItems: "center"}}>Waluta: {score} <img src="../src/assets/Carp.png" className="walutaimage"></img></h1> 
        </>
    )
}