import React from 'react';
import Project from './Project';
import {projects} from '../getProjects';

const ProjectsList = () => {
  return (
    <section id="proyectos" className='flex flex-col items-center'>
      <h2 className="text-2xl sm:text-4xl md:text-4xl mt-6 mb-6">Proyectos</h2>
      <ul className="grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
         {projects.map(project=>
            <Project 
            key={project.title}
            img={project.img}
            title={project.title}
            desc={project.desc}
            sitio={project.sitio}
            repo={project.repo}
            />
          )} 
      </ul>
    </section>
    );
};

export default ProjectsList;
