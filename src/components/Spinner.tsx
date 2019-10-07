import React from 'react';

interface Props {
  content?: string;
}
export const Spinner: React.FC<Props> = ({ content }) => (
  <h2>{`Loading ${content || ''} ...`}</h2>
);
