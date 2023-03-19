export interface ITextEditorProps {
    text?: string;
    setText: (string: any) => void;
}
export default function TextEditor({ text, setText, }: ITextEditorProps): JSX.Element;
