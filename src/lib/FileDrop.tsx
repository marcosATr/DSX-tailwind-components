import { UploadSimple } from "phosphor-react";
import { ChangeEvent, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "../lib";

interface IFileDropProps {
  className?: string;
  multiple?: boolean;
  files: FileList | null;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function FileDrop({
  className,
  multiple,
  files,
  onChange,
}: IFileDropProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleClick() {
    inputRef.current!.click();
  }
  const filesNames = () => {
    const names = [];
    for (const file of files) {
      names.push(file.name);
    }
    // console.log(file);
    return names.join(", ");
  };

  return (
    <div
      className={twMerge([
        "flex h-full min-h-[280px] w-full flex-col items-center justify-center rounded border border-gray transition-colors hover:bg-[#FFFCFC]",
        className,
      ])}
      onClick={handleClick}
    >
      <input
        type="file"
        className="hidden"
        onChange={onChange}
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
