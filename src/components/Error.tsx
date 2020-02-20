import React from 'react';

interface ErrorProps {
  error: {
    status: number;
    statusText: string;
  };
}

const Error: React.FC<ErrorProps> = ({
  error: { status: errorStatus, statusText: errorText },
}: ErrorProps) => (
  <div
    style={{
      backgroundColor: '#FA8072',
      padding: '1.5em',
      border: '2px solid #8B0000',
      borderRadius: '20px',
    }}
  >
    <h2>{errorStatus}</h2>
    <p>{errorText}</p>
  </div>
);

export default Error;
