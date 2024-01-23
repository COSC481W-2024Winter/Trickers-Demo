import { useNavigate } from "react-router-dom";
import ShortUniqueId from "short-unique-id";

function Home() {
    const navigate = useNavigate();
    const uid = new ShortUniqueId({ length: 4 });

    function handleClick() {
        const roomId = uid.rnd();
        navigate(`/room/${roomId}`);
    }
    
    return (
        <div>
            <div>hello from Home.js!</div>
            {/* "button" is a div with onClick property bc having to prevent default on a button html element is annoying */}
            <div onClick={handleClick} >Create a Room</div>
        </div>
    )
}

export default Home;