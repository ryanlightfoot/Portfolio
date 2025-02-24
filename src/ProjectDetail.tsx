// import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Project Details for Project {id}</h2>
      <p>Here you can add more detailed information about the project.</p>
      {/* Add more detailed content about the project here */}
    </div>
  );
}

export default ProjectDetail; 