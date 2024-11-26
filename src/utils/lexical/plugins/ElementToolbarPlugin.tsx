import LexicalToolbarButton from '../components/LexicalToolbarButton';
import { ToolbarIcons } from '../types/toolbar.types';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_ELEMENT_COMMAND } from 'lexical';
import React from 'react';
import type { ElementFormat } from '../types/toolbar.types';

const ElementToolbarPlugin = ({
  format,
  disabled,
}: {
  readonly format: ElementFormat;
  // eslint-disable-next-line react/boolean-prop-naming
  readonly disabled?: boolean;
}) => {
  const [editor] = useLexicalComposerContext();

  const formatElement = () => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, format);
  };

  return (
    <LexicalToolbarButton
      onClick={formatElement}
      icon={ToolbarIcons[format]}
      format={format}
      disabled={disabled}
    />
  );
};

export default ElementToolbarPlugin;
