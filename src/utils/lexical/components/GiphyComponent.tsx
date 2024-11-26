import GiphySearchComponents from './GiphySearchComponent';
import {
  SearchContextManager, // the context manager, includes the Context.Provider
} from '@giphy/react-components';
import React from 'react';

const GiphyComponent = ({
  uploadFile,
}: {
  readonly uploadFile: (addedFile?: File, url?: string, type?: string) => void;
}) => (
  <SearchContextManager
    options={{ rating: 'pg' }}
    apiKey="5xK2mVgvv7N636YCMW6UaJFFGEtFnKhU"
  >
    <GiphySearchComponents uploadFile={uploadFile} />
  </SearchContextManager>
);

export default GiphyComponent;
