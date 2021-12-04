import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const CreateNewEvent = () => {
    const [eventName, setEventName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [timings, setTimings] = useState("");
    const [participants, setParticipants] = useState("");
    const [department, setDepartment] = useState("");
    const [broucher, setBroucher] = useState("");
    const [mode, setMode] = useState("");
    const [eventType, setEventType] = useState("");
    const [image, setImage] = useState("");

    const registerUser = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/v1/activities', {
            method: 'POST',
            body: JSON.stringify({
                event_name: eventName,
                start_date: startDate,
                end_date: endDate,
                timings: timings,
                no_of_participants: participants,
                dept: department,
                mode: mode,
                broucher: broucher,
                image: image,
                event_type: eventType
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
            <h2>Event Details</h2>
            <form onSubmit={registerUser} method="post">
                <div className="formInput">
                    <label htmlFor="eventName">Event Name</label>
                    <div>
                        <input type="text" name="eventName" id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                    </div>
                </div>
                <div className="formInput ">
                    <Box sx={{ display: 'flex' }}>
                        <span>
                            <label htmlFor="startDate">Start Date</label>
                            <div>
                                <input type="date" name="startDate" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                            </div>
                        </span>

                        <span className="spanMargin">
                            <label htmlFor="endDate">End Date</label>
                            <div>
                                <input type="date" name="endDate" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                            </div>
                        </span>
                        <span className="spanMargin">
                            <label htmlFor="timings">Timings</label>
                            <div>
                                <input type="time" name="timings" id="timings" value={timings} onChange={(e) => setTimings(e.target.value)} />
                            </div>
                        </span>
                    </Box>
                </div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Mode</FormLabel>
                    <RadioGroup
                        aria-label="mode"
                        defaultValue="1"
                        name="radio-buttons-group"
                        onChange={(e) => setMode(e.target.value)}
                    >
                        <Box sx={{ display: 'flex' }}>
                            <FormControlLabel value={mode} control={<Radio />} label="Online" />
                            <FormControlLabel value={mode} control={<Radio />} label="Offline" />
                        </Box>
                    </RadioGroup>
                </FormControl>
                <div className="formInput">
                    <label htmlFor="participants">Number of Participants</label>
                    <div>
                        <input type="number" name="participants" id="participants" value={participants} onChange={(e) => setParticipants(e.target.value)} />
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="fileUpload">Broucher</label>
                    <div>
                        <input type="file" name="fileUpload" id="fileUpload" value={broucher} onChange={(e) => setBroucher(e.target.value)} />
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="imageUpload">Upload Images</label>
                    <div>
                        <input type="image" alt="Upload Image" name="imageUpload" id="imageUpload" value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="department">Department</label>
                    <div>
                        <input type="text" name="department" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="eventType">Event Type</label>
                    <div>
                        <input type="text" name="eventType" id="eventType" value={eventType} onChange={(e) => setEventType(e.target.value)} />
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