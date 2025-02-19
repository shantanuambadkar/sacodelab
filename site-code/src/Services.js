import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import "./Services.css"; // External CSS file
import website from './png/software-license-stroke-rounded.svg';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: "transform 0.3s ease",
}));

export default function Services() {
  const [expanded, setExpanded] = useState({
    webDevelopment: false,
    uiUx: false,
  });

  const handleExpandClick = (service) => {
    setExpanded((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  return (
    <div className="card-container">
      <Card className="custom-card">
        <CardHeader 
          avatar={<Avatar src={website} alt="Website Development" className="card-avatar" />}
          title="Website Development" 
          className="card-title" />
        <CardActions>
          <ExpandMore
            expand={expanded.webDevelopment}
            onClick={() => handleExpandClick("webDevelopment")}
            aria-expanded={expanded.webDevelopment}
          >
            <ExpandMoreIcon className="expand-icon" />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.webDevelopment} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph className="card-text">
              Welcome to our world where imagination meets functionality. As a
              website designer, we sculpt pixels into immersive experiences. We
              craft virtual spaces that breathe life into ideas, weaving
              together seamless user interfaces and captivating visuals.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card className="custom-card">
        <CardHeader title="UI / UX Consultation" className="card-title" />
        <CardActions>
          <ExpandMore
            expand={expanded.uiUx}
            onClick={() => handleExpandClick("uiUx")}
            aria-expanded={expanded.uiUx}
          >
            <ExpandMoreIcon className="expand-icon" />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.uiUx} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph className="card-text">
              Step into a world where user experiences transcend expectation and
              interfaces redefine interaction. As a UI/UX consultant, we
              orchestrate digital harmony, sculpting intuitive pathways that
              delight and engage.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
