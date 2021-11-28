import { Card } from "@mui/material";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const AllEvents = () => {
    const [items, setItems] = useState([]);

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

    )
}

export default AllEvents;