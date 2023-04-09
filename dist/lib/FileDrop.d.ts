import { Dispatch, SetStateAction } from "react";
interface IFileDropProps {
    className?: string;
    multiple?: boolean;
    files: FileList | null;
    setFiles: Dispatch<SetStateAction<FileList | null>>;
    variant?: "default" | "small";
}
declare function FileDrop({ className, multiple, files, setFiles, variant, }: IFileDropProps): JSX.Element;
export default FileDrop;
