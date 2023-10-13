import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        <Typography variant="body2" color="text.secondary" align="justify">
          {project.description}
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" marginTop="16px" gap="16px">
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
