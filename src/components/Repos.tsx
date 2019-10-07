import React from 'react';

interface ReposProps {
  repos: Array<any>;
}

const Repos: React.FC<ReposProps> = ({ repos }) => {
  return (
    <ol>
      {repos.map((repo: any) => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ol>
  );
};

export default Repos;
