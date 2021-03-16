import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({title: "", content: ""});

  // My handleChange():
  // function handleChange(event) {
  //   const newValue = event.target.value;
  //   setNote((prevValue) => {
  //     if (event.target.name === "title") {
  //       return {title:newValue, content: prevValue.content};
  //     } else if (event.target.name === "content") {
  //       return {title:prevValue.title, content: newValue};
  //     }
  //   });
  // }

  //Solution handleChange():
  function handleChange(event) {
    const {name, value} = event.target
    setNote(prevNote => { return {...prevNote, [name]:value } })
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({title: "", content: ""});
    event.preventDefault();
    
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
