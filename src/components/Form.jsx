import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {/* rememebr we need expression not STATMENT */}
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}

      {/* or like that */}
      {/* {props.isRegistered === false && (
        <input type="password" placeholder="Confirm Password" />
      )} */}
      {/* <button type="submit">Register</button> */}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
