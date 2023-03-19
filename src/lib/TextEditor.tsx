import {
  useEditor,
  EditorContent,
  Editor,
  mergeAttributes,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";

export interface ITextEditorProps {
  text?: string;
  setText: (string) => void;
}
//TODO: conditionally expose buttons
//TODO: add clear format button

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }
  const commomClasses =
    "px-2 py-1 my-1 text-heading bg-opacity-10 hover:bg-gray rounded mr-1 last:mr-0";

  const commomActiveClasses =
    "px-2 py-1 my-1 p-2 text-heading bg-lightBorder rounded mr-1 last:mr-0";
  return (
    <div className="bg-grayLight p-1">
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 1 })
            .updateAttributes("bold", { class: "bold-tag" })
            .run()
        }
        className={
          editor.isActive("heading", { level: 1 })
            ? commomActiveClasses
            : commomClasses
        }
      >
        h1
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 2 })
            .run()
        }
        className={
          editor.isActive("heading", { level: 2 })
            ? commomActiveClasses
            : commomClasses
        }
      >
        h2
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 3 })
            .run()
        }
        className={
          editor.isActive("heading", { level: 3 })
            ? commomActiveClasses
            : commomClasses
        }
      >
        h3
      </button>
      <button
        onClick={() =>
          editor.chain().focus().setParagraph().run()
        }
        className={
          editor.isActive("paragraph")
            ? commomActiveClasses
            : commomClasses
        }
      >
        paragraph
      </button>
      <button
        onClick={() =>
          editor.chain().focus().toggleBold().run()
        }
        className={
          editor.isActive("bold")
            ? commomActiveClasses
            : commomClasses
        }
      >
        bold
      </button>
      <button
        onClick={() =>
          editor.chain().focus().toggleItalic().run()
        }
        className={
          editor.isActive("italic")
            ? commomActiveClasses
            : commomClasses
        }
      >
        italic
      </button>
      <button
        onClick={() =>
          editor.chain().focus().toggleStrike().run()
        }
        className={
          editor.isActive("strike")
            ? commomActiveClasses
            : commomClasses
        }
      >
        strike
      </button>
      {/* <button
        onClick={() =>
          editor.chain().focus().toggleHighlight().run()
        }
        className={
          editor.isActive("highlight")
            ? commomActiveClasses
            : commomClasses
        }
      >
        highlight
      </button>
      <button
        onClick={() =>
          editor.chain().focus().setTextAlign("left").run()
        }
        className={
          editor.isActive({ textAlign: "left" })
            ? commomActiveClasses
            : commomClasses
        }
      >
        left
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .setTextAlign("center")
            .run()
        }
        className={
          editor.isActive({ textAlign: "center" })
            ? commomActiveClasses
            : commomClasses
        }
      >
        center
      </button>
      <button
        onClick={() =>
          editor.chain().focus().setTextAlign("right").run()
        }
        className={
          editor.isActive({ textAlign: "right" })
            ? commomActiveClasses
            : commomClasses
        }
      >
        right
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .setTextAlign("justify")
            .run()
        }
        className={
          editor.isActive({ textAlign: "justify" })
            ? commomActiveClasses
            : commomClasses
        }
      >
        justify
      </button> */}
    </div>
  );
};

export default function TextEditor({
  text,
  setText,
}: ITextEditorProps) {
  const classNames = "min-w-full p-4 outline-none";

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {
            class:
              "font-normal text-[0.9375rem] leading-[1.375rem] text-defaultText mb-4 last:mb-0",
          },
        },
        heading: false,
      }),
      Heading.configure({ levels: [1, 2] }).extend({
        levels: [1, 2, 3, 4, 5, 6],
        renderHTML({ node, HTMLAttributes }) {
          const level = this.options.levels.includes(
            node.attrs.level
          )
            ? node.attrs.level
            : this.options.levels[0];

          const classes = {
            1: "font-semibold text-[2.375rem] leading-[3.25rem] text-heading mb-4",
            2: "font-semibold text-[2rem] leading-[2.75rem] text-heading mb-4",
            3: "font-semibold text-[1.625rem] leading-[2.25rem] text-heading mb-4",
            4: "font-semibold text-[1.375rem] leading-[1.875rem] text-heading mb-4",
            5: "font-semibold text-[1.125rem] leading-[1.5rem] text-heading mb-4",
            6: "font-semibold text-[0.925rem] leading-[1.25rem] text-heading mb-4",
          };

          return [
            `h${level}`,
            mergeAttributes(
              this.options.HTMLAttributes,
              HTMLAttributes,
              {
                class: `${classes[level]}`,
              }
            ),
            0,
          ];
        },
      }),
    ],
    content: "<p>type something awesome!</p>",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setText(html);
    },
    editorProps: {
      attributes: {
        class: classNames,
      },
    },
  });

  return (
    <div className="rounded border-[3px] border-grayLight">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
