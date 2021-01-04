import React,{useState} from 'react';
import Navigationbar2 from './navigationbar2';
import {Link} from 'react-router-dom'

const Bookdetails=(props)=>{
    const totalPages=props.location.state.totalPages;
    const sortedby=props.location.state.sortedby;
    const searchedbook=props.location.state.searchedbook;
    const currentPage=props.location.state.currentPage;
    const books=props.location.state.books;
    const param=props.location.state.details.volumeInfo;
    console.log(param);
    return(
    <div>
        <Navigationbar2/>
      <div className='row' style={{marginLeft:150}}>
        <div className='col s3' style={{margin: 10}}>
            <div className="card col s12">
                <div className="card-image waves-effect waves-block waves-light" >
                     <img src={param.imageLinks.thumbnail} style={{width: 305, height:400}}/> 
                </div>
                <div className="card-content">
                  <p><b>Title : </b><i>{param.title}</i></p>    
                </div>
            </div>
            {/* <Link to="/"><button className="btn waves-effect waves-light pink" style={{margintop: 20 , width: 325}}>
                      Back to Homepage....
            </button></Link> */}

            {/* can't fix the pagination issue with parameters if i use the parameters as usestate variables then react dom stop compiling to restrict infinite loop. 
            and the changes of pages and books can't be reflected without useState*/}

            <Link to={{pathname:"/", 
                      state:{currentPage: currentPage, 
                             books:books,
                             searchedbook: searchedbook,
                             sortedby: sortedby,
                             totalPages: totalPages}}}>
            <button className="btn waves-effect waves-light pink" style={{margintop: 20 , width: 325}}>
                      Back to Homepage....
            </button></Link>
        </div>
        <div className='col s6' style={{margin: 10}}>
            <div className="card col s12">
                <div className="card-content">
                  <span><p><b>Title : </b><i>{param.title!=null ? param.title:"Unknown"}</i></p></span> 
                  <span><p><b>Published Date : </b>{param.publishedDate!=null ? param.publishedDate:"Uknown"}</p></span> 
                  <span><p><b>Publisher : </b>{param.publisher!=null ? param.publisher:"Uknown"}</p></span>  
                  <span><p><b>Catagory : </b></p>
                  {param.categories!=null ? param.categories.map((category,i) => <li>{ category }</li>):(<li>Unknown</li>)}
                  </span>
                  <span><p><b>Author : </b></p>
                  {param.authors!=null ? param.authors.map((author,i) => <li>{ author }</li>):(<li>Unknown</li>)}
                  </span>
                  <span><p><b>Average Rating : </b>{param.averageRating!=null ? param.averageRating:"Unknown"}</p></span>
                  <span><p><b>Description : </b>{param.description!=null ? param.description:"Unknown"}</p></span>
                  <span><p><b>Preview link : </b>{param.previewLink!=null ? param.previewLink:"Unknown"}</p></span>
                </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
  
  export default Bookdetails;