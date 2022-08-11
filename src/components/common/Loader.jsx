import React from "react";

function Loader(props) {
  return (
    <div className="spinner-border text-danger" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Loader;