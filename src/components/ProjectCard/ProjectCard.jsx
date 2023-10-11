import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProjectCard = ({ project }) => {
  return (
    <>
    <Card style={{ margin: '20px', maxWidth: '345px' }}>
      <CardMedia
        component="img"
        height="140"
        image={project.imageURL}
        alt={project.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
    </Card>
    </>
  );
};

export default ProjectCard;
