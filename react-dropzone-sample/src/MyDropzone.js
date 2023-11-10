import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function MyDropzoneBasic() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log({ acceptedFiles });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>
          ファイルをここにドラッグアンドドロップするか、クリックしてファイルを選択してください
        </p>
      </div>
    </div>
  );
}
