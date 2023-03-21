import { Dispatch, SetStateAction } from "react";
interface IFileDropProps {
    className?: string;
    multiple?: boolean;
    files: FileList | null;
    setFiles: Dispatch<SetStateAction<FileList | null>>;
}
declare function FileDrop({ className, multiple, files, setFiles, }: IFileDropProps): JSX.Element;
export default FileDrop;
