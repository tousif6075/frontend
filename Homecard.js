import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const Homecard = () => {
  return (
    <div style={{ color: "white", marginLeft: "30px", marginTop: "20px" }}>
      <h2>Eid Mubarak!</h2>
      <br />
      <br />
      <Card
        className="card"
        style={{
          backgroundColor: "black",
          color: "white",
          width: "200px",
        }}
      >
        <CardActionArea>
          <img
            style={{ width: "225px", height: "150px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4XHBpiL9fFBO5R9Eoo7YIOiLeL07gJspmw&usqp=CAU"
            alt="img"
          />
          <CardContent
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Typography gutterBottom variant="h5" component="h5">
              Card title
            </Typography>
            <PlayCircleFilledIcon
              style={{
                color: "white",

                display: "flex",
                alignItems: "center",
              }}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Homecard;
