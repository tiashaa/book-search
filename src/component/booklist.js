import React from 'react';
import Bookcard from './bookcard'

const Booklist=(props)=>{
  return(
    <div className="row" style={{marginLeft:130}}>
     <div className="col s12"> 
        {props.books.map((book,i)=>{
            //console.log(book);
            return(<Bookcard book={book} 
                             currentPage={props.currentPage} 
                             books={props.books} 
                             searchedbook={props.searchedbook} 
                             sortedby={props.sortedby}
                             totalPages={props.totalPages}/>)
        })}
     </div> 
    </div>
  )
}


export default Booklist;