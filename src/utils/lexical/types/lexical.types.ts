import type { InitialEditorStateType } from '@lexical/react/LexicalComposer';
import type {
  EditorThemeClasses,
  HTMLConfig,
  KlassConstructor,
  LexicalEditor,
  LexicalNode,
  LexicalNodeReplacement,
} from 'lexical';

export interface LexicalInitialConfig
  extends Readonly<{
    namespace: string;
    nodes?:
      | readonly (
          | KlassConstructor<typeof LexicalNode>
          | LexicalNodeReplacement
        )[]
      | undefined;
    onError: (error: Error, editor: LexicalEditor) => void;
    editable?: boolean | undefined;
    theme?: EditorThemeClasses | undefined;
    editorState?: InitialEditorStateType | undefined;
    html?: HTMLConfig | undefined;
  }> {}
