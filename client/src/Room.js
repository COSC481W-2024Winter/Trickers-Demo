import { useParams } from "react-router-dom";
import './output.css'; 

function Room() {
    const { roomId } = useParams();
    return (
        <div>
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                hello from Room.js!
            </div>
            <div>room id: {roomId}</div>
        </div>
    );
}

export default Room;