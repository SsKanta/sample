import { useMemo } from "react";
import { useDropzone } from "react-dropzone";

// 外枠の基本スタイル
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

// フォーカスが当たったときの枠の色
const focusedStyle = {
  borderColor: "#2196f3",
};

// 受け入れ可能なファイルをドラッグしたときの色
const acceptStyle = {
  borderColor: "#00e676",
};

// 受け入れできないファイルをドラッグしたときの色
const rejectStyle = {
  borderColor: "#ff1744",
};

export function MyDropzoneStyled() {
  const {
    getRootProps,
    getInputProps,
    isFocused, // フォーカス中にtrue
    // 受け入れ可能なファイルをドラッグしたときにtrue
    isDragAccept,
    // 受け入れできないファイルをドラッグしたときにtrue
    isDragReject,
  } = useDropzone({
    // 受け入れ可能なファイル形式を指定する
    accept: "application/pdf",
    // 受け入れ可能なファイル数を指定する
    maxFiles: 3,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>
          ファイルをここにドラッグアンドドロップするか、クリックしてファイルを選択してください
        </p>
      </div>
    </div>
  );
}
