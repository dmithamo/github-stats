import React from 'react';

interface SpinnerProps {
  content?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ content }: SpinnerProps) => (
  <h2>{`Loading ${content || ''} ...`}</h2>
);

export default Spinner;
