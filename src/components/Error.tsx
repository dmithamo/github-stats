import React, { Fragment } from 'react';

interface ErrorProps {
  error: {
    status: string;
    statusText: string;
  };
}

const Error: React.FC<ErrorProps> = ({
  error: { status: errorStatus, statusText: errorText },
}) => (
  <Fragment>
    <h2>{errorStatus}</h2>
    <p>{errorText}</p>
  </Fragment>
);

export default Error;
