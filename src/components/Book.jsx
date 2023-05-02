const Book = (props) => {
    console.log(props)
    const handleSubmit=()=>{
        console.log( props.title)
    }
  return (
    <article className='book'>
        <img src={props.img} alt="" />    
        <h1>{props.title} </h1>
        <h4>{props.author} </h4>
        {props.children}
        <button onClick={handleSubmit} >Alert me</button>
    </article>
  )
};



export default Book;