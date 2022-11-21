// https://quilljs.com/docs/modules/toolbar/
const toolbar = [
    ["bold", "italic", "underline"],
    [{ list: "bullet" }, { list: "ordered" }]
  ];
  
  // https://quilljs.com/docs/modules/clipboard/
  const clipboard = {
    matchVisual: false
  };
  
  // https://quilljs.com/docs/formats/
  export const formats = [
    "bold",
    "italic",
    "underline",
    "list",
    "indent",
    "breaker"
  ];
  
  export const modules = {
    toolbar,
    clipboard
  };
  