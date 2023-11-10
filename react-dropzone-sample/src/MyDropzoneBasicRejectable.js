import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function MyDropzoneBasicRejectable() {
  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    console.log({ acceptedFiles, fileRejections });
  }, []);
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    fileRejections,
  } = useDropzone({ onDrop, accept: "image/*" });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>
          ファイルをここにドラッグアンドドロップするか、クリックしてファイルを選択してください
        </p>
      </div>
      {acceptedFiles.length > 0 || fileRejections.length > 0 ? (
        <ul>
          <li>受け入れられたファイル数: {acceptedFiles.length}</li>
          <li>受け入れできなかったファイル数: {fileRejections.length}</li>
        </ul>
      ) : null}
    </div>
  );
}