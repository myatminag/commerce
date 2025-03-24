import { useCallback, useState, useEffect } from "react";
import {
  $getSelection,
  $isRangeSelection,
  $isRootOrShadowRoot,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
  FORMAT_ELEMENT_COMMAND,
} from "lexical";
import { $isHeadingNode } from "@lexical/rich-text";
import { $isListNode, ListNode } from "@lexical/list";
import {
  $findMatchingParent,
  $getNearestNodeOfType,
  mergeRegister,
} from "@lexical/utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { Toggle } from "@workspace/ui/components/toggle";
import { Button } from "@workspace/ui/components/button";
import { Separator } from "@workspace/ui/components/separator";

import { blockTypeToBlockName } from "@/types/block-name";

import { BlockNameDropDown } from "./block-type-dropdown";
import { RedoIcon } from "@components/icons/redo-icon";
import { UndoIcon } from "@components/icons/undo-icon";
import { BoldIcon } from "@components/icons/bold-icon";
import { ItalicIcon } from "@components/icons/italic-icon";
import { UnderlineIcon } from "@components/icons/underline-icon";
import { StrikeThroughIcon } from "@components/icons/strike-through-icon";
import {
  TextAlignCenterIcon,
  TextAlignJusitfyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from "@components/icons/text-align-icon";

export const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const [undo, setUndo] = useState(false);
  const [redo, setRedo] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [blockType, setBlockType] = useState("paragraph");

  const handleUpdateToolBar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));

      const anchorNode = selection.anchor.getNode();

      let element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : $findMatchingParent(anchorNode, (e) => {
              const parent = e.getParent();
              return parent !== null && $isRootOrShadowRoot(parent);
            });

      if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow();
      }

      const elementDOM = editor.getElementByKey(element.getKey());

      if (elementDOM !== null) {
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType<ListNode>(
            anchorNode,
            ListNode,
          );
          const type = parentList
            ? parentList.getListType()
            : element.getListType();
          setBlockType(type);
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element.getType();
          if (type in blockTypeToBlockName) {
            setBlockType(type);
          }
        }
      }
    }
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          handleUpdateToolBar();
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          handleUpdateToolBar();
        });
      }),
    );
  }, [editor, handleUpdateToolBar]);

  useEffect(() => {
    return mergeRegister(
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setUndo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setRedo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
    );
  }, [editor]);

  return (
    <div className="rounded-t-base z-10 w-full border-b bg-[#E8FCF9] p-1">
      <div className="flex space-x-2">
        <div className="flex items-center">
          <Button
            size="sm"
            disabled={!undo}
            variant="ghost"
            onClick={(e) => {
              e.preventDefault();
              editor.dispatchCommand(UNDO_COMMAND, undefined);
            }}
          >
            <UndoIcon className="size-5" />
          </Button>

          <Button
            size="sm"
            disabled={!redo}
            variant="ghost"
            onClick={(e) => {
              e.preventDefault();
              editor.dispatchCommand(REDO_COMMAND, undefined);
            }}
          >
            <RedoIcon className="size-5" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-9" />

        <BlockNameDropDown blockType={blockType} />

        <Separator orientation="vertical" className="h-9" />

        <Toggle
          area-label="Bold"
          size="sm"
          pressed={isBold}
          onPressedChange={(pressed: boolean) => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
            setIsBold(pressed);
          }}
        >
          <BoldIcon className="size-5" />
        </Toggle>

        <Toggle
          area-label="Italic"
          size="sm"
          pressed={isItalic}
          onPressedChange={(pressed) => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
            setIsItalic(pressed);
          }}
        >
          <ItalicIcon className="size-5" />
        </Toggle>

        <Toggle
          area-label="Underline"
          size="sm"
          pressed={isUnderline}
          onPressedChange={(pressed) => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
            setIsUnderline(pressed);
          }}
        >
          <UnderlineIcon className="size-5" />
        </Toggle>

        <Toggle
          aria-label="strikethrough"
          size="sm"
          pressed={isStrikethrough}
          onPressedChange={(pressed) => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
            setIsStrikethrough(pressed);
          }}
        >
          <StrikeThroughIcon className="size-5" />
        </Toggle>

        <Separator orientation="vertical" className="h-9" />

        <Toggle
          aria-label="strikethrough"
          size="sm"
          onPressedChange={(pressed) => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
            setIsStrikethrough(pressed);
          }}
        >
          <TextAlignLeftIcon className="size-5" />
        </Toggle>

        <Toggle
          aria-label="strikethrough"
          size="sm"
          onPressedChange={(pressed) => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
            setIsStrikethrough(pressed);
          }}
        >
          <TextAlignCenterIcon className="size-5" />
        </Toggle>

        <Toggle
          aria-label="align-right"
          size="sm"
          onPressedChange={(pressed) => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
            setIsStrikethrough(pressed);
          }}
        >
          <TextAlignRightIcon className="size-5" />
        </Toggle>

        <Toggle
          aria-label="align-justify"
          size="sm"
          onPressedChange={(pressed) => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
            setIsStrikethrough(pressed);
          }}
        >
          <TextAlignJusitfyIcon className="size-5" />
        </Toggle>
      </div>
    </div>
  );
};
