import React,{useState} from 'react';
import Navigationbar from './component/navigationbar';
import Searchbar from './component/searchbar';
import Booklist from './component/booklist';
import {getBook} from './api/Book';
import Pagination from './component/pagination';

const App=(props)=>{
  let param1=[];
  let param2=1;
  let param3="";
  let param4='newest';
  let param5=0;
  
  const [searchedbook, setsearchedbook] = useState("");
  const [books,setbooks]=useState([]);
  const [currentPage, setCurrentPage]=useState(1);
  const [totalPages,setTotalPages]=useState(0);
  const [sortedby,setSortedby]=useState('newest')

  console.log(props.location.state)
  
  if(props.location.state!=undefined){
  param1=props.location.state.books;
  param2=props.location.state.currentPage;
  param3=props.location.state.searchedbook;
  param4=props.location.state.sortedby;
  param5=props.location.state.totalPages;
}


  const handleChange=(event)=>{
    setsearchedbook(event.target.value);
  }

  const handleSubmit= async(event)=>{
    event.preventDefault();
    await getBook(searchedbook,setbooks, currentPage, setTotalPages,sortedby);
  }

  const nextPage=async(page_number)=>{
    setCurrentPage(page_number);
    if(searchedbook!="" ){
    await getBook(searchedbook,setbooks, currentPage, setTotalPages,sortedby);}
    else{
    await getBook(param3,setbooks, param2, setTotalPages, param4);}
  }

  return(
    <div>
      <Navigationbar/>
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} setSortedby={setSortedby}/>
      {/* <Booklist books={books} 
                 currentPage={currentPage} 
                 searchedbook={searchedbook} 
                 sortedby={sortedby}
                 totalPages={totalPages}/> */}
      {searchedbook!="" ?
      (<Booklist books={books} 
                 currentPage={currentPage} 
                 searchedbook={searchedbook} 
                 sortedby={sortedby}
                 totalPages={totalPages}/>
                 ):
      (<Booklist books={param1} 
                 currentPage={param2}
                 searchedbook={param3} 
                 sortedby={param4}
                 totalPages={param5}/>)} 
      
      {searchedbook!="" ?(
      totalPages>1?(<Pagination nextPage={nextPage} currentPage={currentPage} totalPages={totalPages} />):""):(
      param5>1?(<Pagination nextPage={nextPage} currentPage={param2} totalPages={param5} />):"")}
    </div>
  )
}

export default App;
