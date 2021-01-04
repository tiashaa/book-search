import React from 'react';
import {Link} from 'react-router-dom';

const Bookcard=(props)=>{
    const imgsrc=props.book.volumeInfo.imageLinks;
    const authors=props.book.volumeInfo.authors;
    const title=props.book.volumeInfo.title;
  return(
    <div className='col s2' style={{margin: 10}}>
    <div className="card medium col s12">
    <div className="card-image waves-effect waves-block waves-light" >
      {imgsrc!=undefined?<img src={imgsrc.thumbnail} style={{width: 185, height:240}}/>:
      <img src="https://picsum.photos/185/240" alt="" />}
    </div>
    <div className="card-stacked">
    <div className="card-content" style={{height:120}}>
      <p>{title!=null ?<b><i>{title}</i></b>:"Unknown"}</p>
      <p>Author: </p>
      {authors!=null ? authors.map((author,i) => <p>{i+1}. { author }</p>):"Unknown"}     
    </div>
    <div className="card-action">
      <Link to={{pathname:"/book/:id"+props.book.id, 
      state: {details: props.book, 
              currentPage: props.currentPage, 
              books: props.books,
              searchedbook: props.searchedbook,
              sortedby: props.sortedby,
              totalPages: props.totalPages}}}>See details</Link>
    </div>
    </div>

  </div>
  </div>
  )
}


export default Bookcard;