import { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const BlogEditor = ({ content, onChange }) => {
  const [editorHtml, setEditorHtml] = useState("");

  useEffect(() => {
    if (content) {
      setEditorHtml(content); // Gelen içerik ile editoru güncelle
    }
  }, [content]);

  const handleChange = (html) => {
    setEditorHtml(html);
    if (onChange) {
      onChange(html); // Yükseltilmiş içerik değişimi
    }
  };

  return (
    <ReactQuill
      value={editorHtml}
      onChange={handleChange}
      modules={BlogEditor.modules}
      formats={BlogEditor.formats}
    />
  );
};

BlogEditor.modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ["bold", "italic", "underline", "strike"], // Çizgi
    [{ list: "ordered" }, { list: "bullet" }], // Liste
    ["link", "image", "video"], // Bağlantı, resim, video
    [{ color: [] }, { background: [] }], // Renk
    [{ align: [] }], // Hizalama
    ["clean"], // Temizleme butonu
  ],
};

BlogEditor.formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "link",
  "image",
  "video",
  "color",
  "background",
  "align",
];

export default BlogEditor;
