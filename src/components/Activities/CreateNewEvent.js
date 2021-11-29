import { useState } from "react";
// import { Link } from "react-router-dom";

const CreateNewEvent = () => {
    const [eventName, setEventName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [timings, setTimings] = useState("");
    const [participants, setParticipants] = useState("");
    const [department, setDepartment] = useState("");

    const registerUser = (e) => {
        e.preventDefault();
        alert(`The name you entered was: ${eventName}`);
        fetch('http://localhost:5000/api/v1/activities', {
            method: 'POST',
            body: JSON.stringify({
                event_name: eventName,
                start_date: startDate,
                end_date: endDate,
                timings: timings,
                no_of_participants: participants,
                dept: department,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div className="login-register">
            <h2>Add Upcoming Event</h2>
            <form onSubmit={registerUser} method="post">
                <div className="formInput">
                    <label htmlFor="eventName">Event Name</label>
                    <div>
                        <input type="text" name="eventName" id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="startDate">Start Date</label>
                    <div>
                        <input type="date" name="startDate" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="endDate">End Date</label>
                    <div>
                        <input type="date" name="endDate" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="timings">Timings</label>
                    <div>
                        <input type="time" name="timings" id="timings" value={timings} onChange={(e) => setTimings(e.target.value)} />
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="participants">Number of Participants</label>
                    <div>
                        <input type="number" name="participants" id="participants" value={participants} onChange={(e) => setParticipants(e.target.value)} />
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="department">Department</label>
                    <div>
                        <input type="text" name="department" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
                    </div>
                </div>
                <div className="buttonContainer">
                    <button type="submit" className="registerBtn">Add Event</button>
                </div>
            </form>
        </div>
    )
}

export default CreateNewEvent;