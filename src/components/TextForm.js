import React, {useState} from 'react'

export default function TextForm(props) {
  let btnstyle  = {
    color:'white',
    backgroundColor:'green'
}
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase","Success: ");
  };
  const handleLoClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase","Success: ");
  };
  const handleclClick = () => {
    console.log("Text was cleared");
    let newText = "";
    setText(newText)
    props.showAlert("Text has been cleared","Success: ");
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value)
  }
  const handlecopy = () =>{
    var text = document.getElementById("mybox"); //optional
    text.select(); //optional
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); //optional
    props.showAlert("Text has been Copied","Success: ");
  }

  const handlespace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Between spaces are removed","Success: ");
  }


  const [text,setText] = useState('Enter the text')
  return (
    <>
    <div className="container" style={{color:props.mode=== 'dark'?'green':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'black':'white',color:props.mode=== 'dark'?'white':'black'}}id="mybox" rows="8"></textarea>
      </div><br></br>
          <button disabled = {text.length===0} className='upperprimary mx-1 my-1' style={btnstyle} onClick={handleUpClick} >Click to Uppercase</button>
          <button disabled = {text.length===0} className='lowerprimary mx-2 my-1' style={btnstyle} onClick={handleLoClick} >Click to Lowercase</button>
          <button disabled = {text.length===0} className='lowerprimary mx-1 my-1' style={btnstyle} onClick={handleclClick} >Click to CLear Teaxt</button>
          <button disabled = {text.length===0} className='Copy Text mx-1 my-1' style={btnstyle} onClick={handlecopy} >Click to Copy Teaxt</button>
          <button disabled = {text.length===0} className='spaceremover ' style={btnstyle}onClick={handlespace} >Click to remove space from Teaxt</button>
    </div>
      <div className="container my-3" style={{color:props.mode === 'dark'? 'grey':'black'}}>
        <h2>Your Word and Character Counting</h2>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes Read</p>
        <h2>Preview of your Text</h2>
        <p>{text.length > 0? text:"Enter text here to preview"}</p>
      </div>
    </> ///\s/ is used to not count space
  )
}
