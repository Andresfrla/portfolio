import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

const ProjectCard = ({ project }) => {
  return (
    <Card style={{ margin: '20px', maxWidth: '345px' }}>
      <CardMedia
        className='projectImage'
        component="img"
        height="350"
        image={project.imageURL}
        alt={project.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="justify">
          {project.description}
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" mt={2} style={{ gap: '16px' }}>
          {project.projectURL && 
            <a href={project.projectURL} target="_blank" rel="noopener noreferrer">
              <LinkIcon />
            </a>
          }
          {project.gitURL && 
            <a href={project.gitURL} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          }
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
