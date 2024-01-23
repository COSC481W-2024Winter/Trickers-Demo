import { useParams } from "react-router-dom";

function Room() {
    const { roomId } = useParams();

    return (
        <div>
            <div>hello from Room.js!</div>
            <div>room id: {roomId}</div>
        </div>
    )
}

export default Room;