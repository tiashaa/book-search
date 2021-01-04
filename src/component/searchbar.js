import React from 'react';

const Searchbar=(props)=>{
  return(
    <div className="row">
    <form className="col s12" onSubmit={props.handleSubmit}>
      <div className="row">
        <div className="col s3"></div>
        <div className="input-field col s5" >
        <input type="text" placeholder="Search..." onChange={props.handleChange} />
        </div>
        <button className="btn waves-effect waves-light pink" type="submit" name="action" style={{marginTop:20}}><i className="material-icons">search</i></button>


        <button className="btn waves-effect waves-light disabled orange" style={{marginTop:20,marginLeft:40}}>
          <i className="material-icons">swap_vert</i></button>
          <button className="btn waves-effect waves-light orange" style={{marginTop:20}}
                onClick={()=>{
                  props.setSortedby('newest')
                }}>Latest</button>
          <button className="btn waves-effect waves-light orange" style={{marginTop:20}}
                onClick={()=>{
                  props.setSortedby('relevance')
                }}>Relevant</button>
      </div>
    </form>
  </div>
  )
}


export default Searchbar;