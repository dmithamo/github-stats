import React from 'react';

interface ReposProps {
  repos: Array<any>;
}

const Repos: React.FC<ReposProps> = ({ repos }) => {
  return repos.length === 0 ? (
    <h2>This user has no repos. Yet</h2>
  ) : (
    <ol>
      {repos.map((repo: any) => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ol>
  );
};

export default Repos;
