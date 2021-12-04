import { Button, Card } from '@mui/material';
import { Link } from "react-router-dom";

import React from 'react';
export default function Dashboard() {
  return (
    <div className="cardsContainer dashboardContainer">
      <Card className="events_card"><h3>Ek Bharat Shreshtha Bharat</h3> <Link to="/events"><Button disableElevation size="small" variant="contained">View Details</Button></Link></Card>
      <Card className="events_card"><h3>MATHRUBHASHA DIWAS</h3> <Link to="/single-event/1"><Button disableElevation size="small" variant="contained">View Details</Button></Link></Card>
      <Card className="events_card"><h3>FIT INDIA VIRTUAL RUN 2.0</h3> <Link to="/events"><Button disableElevation size="small" variant="contained">View Details</Button></Link></Card>
      <Card className="events_card"><h3>AZADI KA AMRIT MAHOTSAV</h3> <Link to="/events"><Button disableElevation size="small" variant="contained">View Details</Button></Link></Card>
    </div>
  );
}