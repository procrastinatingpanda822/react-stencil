import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function PlayerCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }} className="card">
            <CardMedia
                component="img"
                height="200"
                src={require('/public/images/' + props.player.imageNum + '.png')}
                alt={props.player.name}
            />
            <h2>{props.player.name}</h2>
            <p>{props.player.points} PPG</p>
            <p>{props.player.rebounds} RPG</p>
            <p>{props.player.assists} APG</p>
            <p>{props.player.position}</p>
            <p>{props.player.description}</p>
            <Button variant="contained">
                Draft
            </Button>
        </Card>
    );
}
