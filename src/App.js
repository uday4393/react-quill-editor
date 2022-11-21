import "./App.css";
import "react-quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";


import ReactQuill, { Quill } from "react-quill";
import { modules, formats } from "./config";

const Block = Quill.import("blots/block");

Block.tagName = "DIV";
Quill.register(Block, true);

export default function App() {

  const keyboardBindings = {
    linebreak: {
      key: 38,
      handler: function (range, _context) {
        this.quill.clipboard.dangerouslyPasteHTML(
          range.index,
          "<p><br/>&<br/></p>"
        );
      }
    }
  };

  const mods = {
    ...modules,
    keyboard: {
      bindings: keyboardBindings
    }
  };

  const InsertAmpersand = () => {
    const div = document.createElement('div');
    div.className = 'row';
    div.innerHTML = `<br />&`
    document.getElementsByClassName('ql-editor')[0].firstChild.appendChild(div);
    console.log(document.getElementsByClassName('ql-editor')[0].firstChild)
  }
  

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ReactQuill theme="snow" modules={mods} formats={formats} />
      <div><button onClick={InsertAmpersand}>INSERT &</button></div>
    </div>
  );
}
