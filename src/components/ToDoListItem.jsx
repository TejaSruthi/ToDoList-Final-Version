import React from "react";

function ToDoListItem(props) {
  return <li onClick={() => props.checked(props.mykey)}>{props.item}</li>;
}

export default ToDoListItem;
