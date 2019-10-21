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
        <Repo key={repo.id} repo={repo} />
      ))}
    </ol>
  );
};

interface RepoProps {
  repo: any;
}

const Repo: React.FC<RepoProps> = ({ repo }) => {
  const {
    name,
    description,
    html_url: githubURL,
    created_at: created,
    language: tech,
  } = repo;
  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
      <h6>{tech}</h6>
      <p>{`Created : ${new Date(created).toUTCString()}`}</p>

      <a href={githubURL} target='_blank' rel='noreferrer noopener'>
        View on Github
      </a>
    </li>
  );
};

export default Repos;
