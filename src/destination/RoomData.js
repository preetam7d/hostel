import "./RoomStyle.css"
function RoomData (props){
    return(
        <div className="r-card">
            <div className="r-image">
                <img src={props.image} alt="img"/>
            </div>
            <h4>
                {props.heading}
            </h4>
            <p>{props.text}</p>

        </div>

    )
    }
    export default RoomData