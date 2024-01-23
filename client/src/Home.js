import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    function handleClick() {
        const id = "f776"
        navigate(`/room/${id}`);
    }
    
    return (
        <div>
            <div>hello from Home.js!</div>
            <div onClick={handleClick} >Create a Room</div>
        </div>
    )
}

export default Home;