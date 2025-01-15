import React from 'react';
import { LoaderSpinner, LoaderWrapper } from 'styles/Loader';

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <LoaderSpinner />
    </LoaderWrapper>
  );
};

export default Loader;
