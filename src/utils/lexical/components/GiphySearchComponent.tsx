import { giphyStyles } from '../styles';
import { SearchContext, SearchBar, Grid } from '@giphy/react-components';
import { Box } from '@mui/material';
import React, { useContext } from 'react';

/**
 * Component to search for Giphy animated gifs and add to the editor
 * using the provided uploadFile function.
 */
const GiphySearchComponents = ({
  uploadFile,
}: {
  readonly uploadFile: (addedFile?: File, url?: string, type?: string) => void;
}) => {
  const { fetchGifs, searchKey } = useContext(SearchContext);

  return (
    <Box sx={giphyStyles}>
      <SearchBar className="searchBox" />
      <Box sx={{ height: '200px', width: '100%', overflowY: 'scroll' }}>
        <Grid
          key={searchKey}
          columns={3}
          width={400}
          fetchGifs={fetchGifs}
          hideAttribution
          onGifClick={async (gif, e) => {
            e.preventDefault();
            if (gif.images.original.url) {
              await uploadFile(undefined, gif.images.original.url, 'gif');
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default GiphySearchComponents;
