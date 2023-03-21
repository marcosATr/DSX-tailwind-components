import { UploadSimple } from "phosphor-react";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "../lib";

interface IFileDropProps {
  className?: string;
  multiple?: boolean;
  files: FileList | null;
  setFiles: Dispatch<SetStateAction<FileList | null>>;
}

function FileDrop({
  className,
  multiple,
  files,
  setFiles,
}: IFileDropProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  function handleClick() {
    inputRef.current!.click();
  }

  const filesNames = () => {
    const names: string[] = [];
    for (const file of files || []) {
      names.push(file.name);
    }
    return names.join(", ");
  };

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    setFiles(e.dataTransfer.files);
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }

  function handleDragOver(
    e: React.DragEvent<HTMLDivElement>
  ) {
    e.preventDefault();
  }

  function handleDragEnter() {
    setIsDragging(true);
  }

  function handleDragLeave() {
    isDragging && setIsDragging(false);
  }

  return (
    <div
      className={twMerge([
        "flex h-full min-h-[280px] w-full flex-col items-center justify-center rounded border border-gray transition-colors hover:bg-[#FFFCFC]",
        isDragging && "animate-pulse",
        className,
      ])}
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <input
        type="file"
        className="hidden"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setFiles(event.target.files)
        }
        accept="image/*"
        multiple={multiple}
        ref={inputRef}
      />
      <div className="rounded bg-grayLight p-[10px]">
        <UploadSimple
          size={32}
          weight="regular"
          className="text-defaultText"
        />
      </div>
      <Typography
        className="mt-8 mb-2 text-defaultText"
        variant="h2"
        as="span"
      >
        Click or drag to select your files to upload.
      </Typography>
      <Typography className="max-w-[70%] text-center">
        {(files || []).length > 0
          ? filesNames()
          : "No file selected."}
      </Typography>
    </div>
  );
}

export default FileDrop;
