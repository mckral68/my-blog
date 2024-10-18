import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Temel stil dosyası

const BlogEditor = ({ content, onChange }) => {
  return (
    <div>
      <ReactQuill
        value={content}
        onChange={onChange}
        theme="snow" // Temayı belirleyin
      />
    </div>
  );
};

export default BlogEditor;
