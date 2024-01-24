const ProjectExperience = ({ period, position, organizationUrl, organizationName, description, skills }) => {
    return (
      <div className="prose prose-zinc dark:prose-invert max-w-full w-full">
        <p>{period}</p>
        <h1 className="text-3xl my-2">
          <span className="font-helvetica">{position} at</span>
          <a href={organizationUrl} target="_blank" rel="noopener noreferrer" className="underline px-2">
            {organizationName}
          </a>
        </h1>
  
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
        
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ProjectExperience;
  