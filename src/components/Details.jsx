function Details(props) {
  return(
  <>
  {
    props.isActive ? 
    <div className="text-white">
      {props.children}
  </div> : ""    
  }
</>
)
}

export default Details;
