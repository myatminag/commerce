import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import type { InitialConfigType } from "@lexical/react/LexicalComposer";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

import { ToolbarPlugin } from "./plugins/toolbar-plugin";

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
const onError = (error: Error) => {
  throw error;
};

export const TextEditor = () => {
  const config: InitialConfigType = {
    namespace: "lexical-editor",
    theme: {
      text: {
        underline: "underline",
        strikethrough: "editor-text-strikethrough",
      },
    },
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      AutoLinkNode,
      LinkNode,
    ],
    onError,
  };

  return (
    <LexicalComposer initialConfig={config}>
      <div className="prose border-border-200 rounded-base relative mx-auto flex max-w-full flex-col border">
        <ToolbarPlugin />
        <div className="relative mt-2">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="relative h-56 w-full overflow-auto px-3 focus:outline-none" />
            }
            placeholder={
              <p className="pointer-events-none absolute top-1 w-full px-3 text-sm text-neutral-500/50">
                Enter description
              </p>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <ListPlugin />
        <LinkPlugin />
        <HistoryPlugin />
        <AutoFocusPlugin />
      </div>
    </LexicalComposer>
  );
};
