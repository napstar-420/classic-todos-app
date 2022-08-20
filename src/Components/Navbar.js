import React from "react";
import "./CSS/navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><i className="fa fa-pencil-square-o" aria-hidden="true"></i> &nbsp;Creat a Todo</li>
        <li><i className="fa fa-file-text-o" aria-hidden="true"></i> &nbsp;View Todo List
        </li>
      </ul>
    </nav>
  );
}