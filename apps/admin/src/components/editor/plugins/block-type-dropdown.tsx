import { $createParagraphNode, $getSelection } from "lexical";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import type { HeadingTagType } from "@lexical/rich-text";
import { $createHeadingNode, $createQuoteNode } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";

import { blockTypeToBlockName } from "@/src/types/block-name";

interface BlockTypeDropdownProps {
  blockType: keyof typeof blockTypeToBlockName;
}

export const BlockNameDropDown = ({ blockType }: BlockTypeDropdownProps) => {
  const [editor] = useLexicalComposerContext();

  const formatHeading = (headingLevel: HeadingTagType) => {
    editor.update(() => {
      const selection = $getSelection();
      $setBlocksType(selection, () => $createHeadingNode(headingLevel));
    });
  };

  const formatParagraph = () => {
    editor.update(() => {
      const selection = $getSelection();
      $setBlocksType(selection, () => $createParagraphNode());
    });
  };

  const formatOrderedList = () => {
    if (blockType !== "number") {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }
  };

  const formatUnorderedList = () => {
    if (blockType !== "bullet") {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }
  };

  const formatQuote = () => {
    editor.update(() => {
      const selection = $getSelection();
      $setBlocksType(selection, () => $createQuoteNode());
    });
  };

  return (
    <Select
      value={blockType}
      onValueChange={(value) => {
        switch (value) {
          case "h1":
            formatHeading("h1");
            break;
          case "h2":
            formatHeading("h2");
            break;
          case "h3":
            formatHeading("h3");
            break;
          case "paragraph":
            formatParagraph();
            break;
          case "number":
            formatOrderedList();
            break;
          case "bullet":
            formatUnorderedList();
            break;
          case "quote":
            formatQuote();
            break;
        }
      }}
    >
      <SelectTrigger className="h-9 w-36 border-none bg-transparent hover:bg-neutral-100">
        <SelectValue placeholder="Block Type" />
      </SelectTrigger>

      <SelectContent>
        {Object.keys(blockTypeToBlockName).map((block) => {
          return (
            <SelectItem key={block} value={block}>
              {blockTypeToBlockName[block]}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
