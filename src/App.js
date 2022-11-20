import 'react-quill/dist/quill.snow.css';
import {useState} from 'react'
import './App.css';
import { useQuill } from "react-quilljs";

const App = () => {
  const [value, setValue] =  useState("");
  const { quill, quillRef } = useQuill();

  const handleSave = () => {
    const text = quill.getText();
    setValue(text);
    const cursorPosition = quill.getSelection().index;
    if(cursorPosition){
      quill.clipboard.dangerouslyPasteHTML(cursorPosition,
        "<p><br/><br/></p>")
      quill.insertText(cursorPosition, "&");
      quill.setSelection(cursorPosition + 1);
    }
    }
    return (
      <div className="App">
        <div style={{ width: 800, height: 500 }}>
          <div style={{ width: 500, height: 300 }}>
            <div>Saved State : {value}</div>
            <div ref={quillRef} />
          </div>  
        </div>
          <button onClick={handleSave}>Insert '&'</button>
        </div>
    )
}

export default App;