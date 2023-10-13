import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Unibook-Pro. for Jeblush',
      description: `Developed a full-stack RESTful application for a renowned beauty salon in Mexico City, designed to streamline their service reservations. React | Mongo | JavaScript | HTML | CSS`,
      imageURL: 'https://i.ibb.co/0sjXmkC/unibook-pro.jpg',
      gitURL: 'https://github.com/',
      projectURL: 'https://unibookpro-app.netlify.app/'
    },
    {
      title: 'LOL-Wiki',
      description: `This project is a dynamic app designed to tap into the League of Legends API. Developed using Bootstrap and Handlebars, the app presents a user-friendly interface that brings detailed game insights to the players`,
      imageURL: 'https://i.ibb.co/WHjnHX8/lolwiki.jpg',
      gitURL: 'https://github.com/',
      projectURL: ''
    },
    {
      title: 'Vampire VS Zombies',
      description: `Navigate a world where a vampire avoids zombies using canvas-rendered visuals. Consume pumpkins to transform and turn the undead into your prey. A captivating game crafted with HTML, CSS, and JavaScript.`,
      imageURL: 'https://i.ibb.co/frFMJ5g/vampirevszombies.jpg',
      gitURL: 'https://github.com/Andresfrla/vampires-vs-zombies',
      projectURL: 'https://andresfrla.github.io/vampires-vs-zombies/'
    },
    {
      title: 'Tic Tac Toe',
      description: `Harness the power of React in this modern rendition of the classic Tic Tac Toe game. Experience smooth gameplay, interactive UI, and dynamic state management as you strategize your way to three in a row. A timeless game with a contemporary twist.`,
      imageURL: 'https://i.ibb.co/n0wfn8R/tictactoe.jpg',
      gitURL: 'https://github.com/Andresfrla/Tik-Tak-Toe-React',
      projectURL: ''
    },
    {
      title: 'Clone with bootstrap',
      description: `Dive into a meticulously crafted clone, mirroring the essence of the original, all powered by Bootstrap's responsive framework. Experience familiar designs paired with seamless responsiveness. Bootstrap | HTML | CSS`,
      imageURL: 'https://i.ibb.co/QYg5Dz5/cloning.jpg',
      gitURL: 'https://github.com/Andresfrla/Tik-Tak-Toe-React',
      projectURL: ''
    }
  ];

  return (
    <div className="projectsContainer" style={{margin: '100px'}}>
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
