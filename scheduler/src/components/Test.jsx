import React, { useState } from "react";

export default function Test() {
  //will be creating some buttons and inputs for testing. first the toggle will be false, then when clicked it will be set as not its current state.

  //I create two states to keep track on the toggle and text
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");

  //I create a object state to keep track on multiple properties rather then make a state for each.
  const [object, setObject] = useState({
    name: "",
    age: "",
    email: "",
  });

  //A function to handle when the toggle is pressed, it taked the React event property, prevent refreshing by default and reverses the current boolean state of the toggle variable.
  function handleToggle(event) {
    event.preventDefault();
    setToggle(!toggle);
  }

  //A function that uses Reacts value property to update the state with the value in the target, the input field.
  function handleTextChange(e) {
    setText(e.target.value);
  }

  // A function tied to Reacts onSubmit form property to submit the data when a submit button is submitted.
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    console.log(toggle + " " + text);

    setText("");
    setToggle(false);
  }

  //Rendering JXS with the return.
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">text</label>
          <input
            id="text"
            type="text"
            name="text"
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <button name="toggle" value={toggle} onClick={handleToggle}>
            Toggle
          </button>
        </div>
        <div>
          <button disabled={!text} type="submit">
            {" "}
            submit
          </button>
        </div>
      </form>
      <p> you typed: {text}</p>
      <button onClick={() => setText("Hello")}> change input to Hello</button>
      <button onClick={() => setText("")}> change input to empty</button>

      {/* This form updates the objects properties rather then individual states, I dynamically get the the value of the hard coded value with Reacts event object. */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(object);
          setObject({ name: "", age: "", email: "" });
        }}
      >
        <div>
          <div>
            <input
              type="text"
              onChange={(e) => {
                console.log(e);
                setObject({ ...object, name: e.target.value });
              }}
              value={object.name}
            />
          </div>
          <div>
            <input
              type="number"
              onChange={(e) => setObject({ ...object, age: e.target.value })}
              value={object.age}
            />
          </div>

          <div>
            <input
              type="email"
              onChange={(e) => setObject({ ...object, email: e.target.value })}
              value={object.email}
            />
          </div>
        </div>
        <div>
          <button type="submit">submit form</button>
        </div>
      </form>
    </>
  );
}
