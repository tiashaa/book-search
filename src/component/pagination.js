import React from "react";

const Pagination = (props) => {
  const page_links = [];
  for (let i = 1; i <= props.totalPages; i++) {
    let isActive;
    if (props.currentPage === i) {
      isActive = "pink";
    } else {
      isActive = "blue";
    }

    let classes = "btn small wave-effect waves-light " + isActive;

    page_links.push(
      <button
        className={classes}
        key={i}
        onClick={() => {
          props.nextPage(i);
        }}
      >
        {i}
      </button>
    );
  }
  return (
    <div className="container">
    <div className="row">
    
      <div className="row center">
          {props.currentPage!==1?
          (<button className="btn small waves-effect waves-light blue" style={{marginRight: 2}}><i className="material-icons">chevron_left</i></button>):""}
          {page_links}
          {props.currentPage!==props.totalPages?
          (<button className="btn small waves-effect waves-light blue" style={{marginLeft: 2}}><i className="material-icons">chevron_right</i></button>):" "}
        </div>
    </div>
    </div>
  );
};

export default Pagination;