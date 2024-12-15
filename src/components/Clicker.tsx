import { useMainGameContext } from "../contexts/MainGameContext";

export default function Clicker() {

    const {modifier,handleScoreIncrement} = useMainGameContext();
    const imageUrl = '../src/assets/Carp.png';


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const span = document.createElement('span');
        span.className = 'clickEffect';
        span.innerHTML = `+${modifier.toString()}<img src="${imageUrl}"/>`;
        handleScoreIncrement();
    
        const buttonRect = (e.target as HTMLButtonElement).getBoundingClientRect();
    
        const randomX = Math.random() * buttonRect.width;

        span.style.left = `${randomX}px`; 
        span.style.top = `-${buttonRect.height - buttonRect.height}px`; 
    
        e.currentTarget.appendChild(span);
    
        setTimeout(() => {
          span.remove();
        }, 1000);
    };

    return (
        <button draggable="false" className="clicker" onClick={handleClick}>
            <img draggable="false" src="../src/assets/karp.png"/>
        </button>
    )
}