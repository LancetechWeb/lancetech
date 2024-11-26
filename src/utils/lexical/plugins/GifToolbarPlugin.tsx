import GiphyComponent from '../components/GiphyComponent';
import LexicalToolbarButton from '../components/LexicalToolbarButton';
import {
  INSERT_IMAGE_COMMAND,
  getSelectedHTMLElement,
} from '../helpers/lexical.helpers';
import { ToolbarIcons } from '../types/toolbar.types';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { Box, Popper } from '@mui/material';
import React from 'react';
import type { MiscFormat } from '../types/toolbar.types';

const GifToolbarPlugin = ({
  format,
  disabled,
}: {
  readonly format: MiscFormat;
  // eslint-disable-next-line react/boolean-prop-naming
  readonly disabled?: boolean;
}) => {
  const [editor] = useLexicalComposerContext();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openGiphySearch = () => {
    getSelectedHTMLElement(editor).then(({ selectedElement }) =>
      setAnchorEl(selectedElement),
    );
  };

  const addFile = (addedFile?: File, url?: string, type?: string) => {
    if (url) {
      editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
        altText: 'giphy gif',
        src: url,
      });
      setAnchorEl(null);
    }
  };

  return (
    <>
      <LexicalToolbarButton
        onClick={openGiphySearch}
        icon={ToolbarIcons[format]}
        format={format}
        disabled={disabled}
      />
      <Popper open={open} anchorEl={anchorEl} sx={{ zIndex: 100000000 }}>
        <Box
          className="floating-link-editor"
          sx={{
            backgroundColor: "white",
            p: 1,
            borderRadius: '5px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            display: 'flex',
          }}
        >
          <GiphyComponent uploadFile={addFile} />
        </Box>
      </Popper>
      <LinkPlugin />
    </>
  );
};

export default GifToolbarPlugin;
