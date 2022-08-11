import React from "react";

function Loader(props) {
  return (
    //Loading spinner provided by bootstrap
    <div className="spinner-border text-danger" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Loader;
