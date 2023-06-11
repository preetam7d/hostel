import "./Contactus.css"


function Contactus(){
    return(
        <div className="form-container">
            <h1>Send a Message to us if you have any complaint</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="message" rows="4"></textarea>
                <button type="submit">Send Message</button>

            </form>
        </div>


    )
}
export default Contactus