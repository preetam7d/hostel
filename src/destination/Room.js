import "./RoomStyle.css"
import RoomData from "./RoomData"
import room1 from "../assests/img2.jpg"
import room2 from "../assests/img3.jpg"
import room3 from "../assests/img4.jpg"
function Room(){
    return(
        <div className="room">
            <h1>Rooms We Provide</h1>
            <p>These are the best rooms that you never seen</p>
            <div className="roomcard">
                <RoomData
                image={room1}
                heading="one"
                text="jdsbcibciisbcbcibcjdbaiuebuebclebciueiubiew"
                />
                <RoomData
                image={room2}
                heading="two"
                text="jdsbcibciisbcbcibcjdbaiuebuebclebciueiubiew"
                />
                <RoomData
                image={room2}
                heading="three"
                text="jdsbcibciisbcbcibcjdbaiuebuebclebciueiubiew"
                />




            </div>
        </div>
    )
}
export default Room