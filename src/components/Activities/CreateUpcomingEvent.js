import { useState } from "react";

const CreateUpcomingEvent = () => {
    const [eventName, setEventName] = useState("");
    const [eventDetails, setEventDetails] = useState("");

    const createUpcomingEvent = (e) => {
        e.preventDefault();
        console.log(eventName, eventDetails);
        fetch('http://localhost:5000/api/v1/create-upcoming-event', {
            method: 'POST',
            body: JSON.stringify({
                event_name: eventName,
                event_details: eventDetails,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                alert(`Event succesfully entered: ${eventName}`);
            });
    }

    return ( 
        <div className="login-register">
            <h2>Add Upcoming Event</h2>
            <form onSubmit={createUpcomingEvent} method="post">
                <div className="formInput">
                    <label htmlFor="eventName">Event Name</label>
                    <div>
                        <input type="text" name="eventName" id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="eventDetails">Event Details</label>
                    <div>
                        <textarea name="eventDetails" id="eventDetails" cols="30" rows="10" value={eventDetails} onChange={(e) => setEventDetails(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="buttonContainer">
                    <button type="submit" className="registerBtn">Add Event</button>
                </div>
            </form>
        </div>
     );
}
 
export default CreateUpcomingEvent;