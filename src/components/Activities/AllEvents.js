import { Card, Tab, Tabs } from "@mui/material";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const AllEvents = () => {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/activities')
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                },
                (error) => {
                    setItems([]);
                })
    }, [])

    return (
        <div >
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="2019-2020" />
                <Tab label="2020-2021" />
                <Tab label="2021-2022" />
            </Tabs>

            <div className="cardsContainer">
                {items.map(item => (
                    <div>
                        <Card key={item.id} variant="outlined" className="events_card">
                            <h4>{item.event_name}</h4>
                            <h6>Start Date:</h6>
                            <small> {new Date(item.start_date).getDate() + '-' + new Date(item.start_date).getMonth() + '-' + new Date(item.start_date).getFullYear()}</small>
                            <h6>End Date:</h6>
                            <small> {new Date(item.end_date).getDate() + '-' + new Date(item.end_date).getMonth() + '-' + new Date(item.end_date).getFullYear()}</small>
                            <p>
                                <h5>Number of Participants: {item.no_of_participants}</h5>
                                <h5>Department: {item.dept}</h5>
                            </p>
                        </Card>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default AllEvents;