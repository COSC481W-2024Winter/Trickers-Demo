import { useParams } from "react-router-dom";
import './output.css'; 

function Room() {
    const { roomId } = useParams();
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-custom-bg-color">
            <div>
                <p className="text-center text-custom-size">Room: {roomId}</p>
            </div>
            <MyCanvas />
        </div>
    );
}

function MyCanvas() {
    return (
        <canvas
            id="myCanvas"
            width={996}
            height={468}
            className="bg-white shadow-lg border-2 border-gray-300 m-10"
        ></canvas>
    );
}

export default Room;
