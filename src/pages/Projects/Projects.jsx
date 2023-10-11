import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del Proyecto 1',
      imageURL: 'https://image.shutterstock.com/image-photo/3d-image-neon-abstract-260nw-2258892637.jpg'
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del Proyecto 2',
      imageURL: 'https://image.shutterstock.com/image-photo/neon-3d-image-robot-face-260nw-2271841123.jpg'
    },
    // ... Agrega más proyectos según lo necesites
  ];

  return (
    <div style={{ padding: '40px' }}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
