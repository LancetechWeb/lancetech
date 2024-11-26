import GiphySearchComponents from './GiphySearchComponent';
import {
  SearchContextManager, // the context manager, includes the Context.Provider
} from '@giphy/react-components';
import { getVariable } from '../../misc/env.misc';

const GiphyComponent = ({
  uploadFile,
}: {
  readonly uploadFile: (addedFile?: File, url?: string, type?: string) => void;
}) => (
  <SearchContextManager
    options={{ rating: 'pg' }}
    apiKey={getVariable("GIPHY_API_KEY")}
  >
    <GiphySearchComponents uploadFile={uploadFile} />
  </SearchContextManager>
);

export default GiphyComponent;
