
import React, {useState} from 'react'



export default function Textform(props) {
    const [text, setText] = useState("Enter the text here");
    //text= "new text";  wrong way to change the state
    // setText("new text");
    const handleCapital=()=>{

        let newText =text.charAt(0).toUpperCase(" ") + text.slice(1);
        setText(newText);
        props.showAlert("Captlized Words", "success");
    }
    const Upclick = ()=>{
        console.log("UpButton Clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    };

    const lowerclick = ()=>{
        console.log("Lowercase Clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    };
    const handleCleartext =()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success");
    }
    const CopyHandle = ()=>{
        console.log("Cleartext");
        var copytext = document.getElementById("textbox");
        copytext.select();
        navigator.clipboard.writeText(copytext.value);
        props.showAlert("Copied", "success");
        // let newText= text.cle();
        // setText(newText);
    };
    const handleSpaces = ()=>{
     
        let newText =text.split(/[ ]+/); 
        setText(newText.join(" "));
        // let newText= text.cle();
        // setText(newText);
        props.showAlert("Removed Spaces", "success");
    };

    const handleOnchange= (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    let Btns={
        margin: '5px'
    }
  return (
    <>
      <div className='container'>
            <h1>{props.heading} - </h1>
            <div className="form-group">
             
                <textarea type="textbox" style={{backgroundColor: props.mode==='dark'?'#042743':'white'}} className="form-control" onChange={handleOnchange} id="textbox" value={text}  />

            </div>
            <div className="conatiner my-3">
            <button className="btn btn-primary" style={Btns} onClick={Upclick} >Convert to UpperCase</button>

            <button className="btn btn-primary" style={Btns} onClick={lowerclick} >Convert to LowerCase</button>
            <button className="btn btn-primary" style={Btns} onClick={handleCleartext} >CLear Text</button>

            <button className="btn btn-primary" style={Btns} onClick={CopyHandle} >Copy Text</button>
            <button className="btn btn-primary" style={Btns} onClick={handleSpaces} >Remove Extra Spaces</button>
            <button className="btn btn-primary" style={Btns} onClick={handleCapital} >Captlize Words</button>
            </div>
            <div className="container my-3" >
                <h2 >
                    Your Text Summery
                </h2>
                <p>{text.split(/[^\s]+/).length - 1} words and {text.length} characters</p>
                <p>{0.0008 * text.split(" ").length} read minuts</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter the something to preview it here"}</p>
            </div>
            </div>
          
    </>
  )
}
