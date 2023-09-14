import React, { Component } from 'react'


export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl, url, author,date}=this.props;
    // let {title,description, url}=this.props;

    return (
      <div>
        <div className="card my-3" >
            <img className="card-img-top" src={imageUrl} alt="No Image"/>
            
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">Published by {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
              <a href={url} rel='noreferrer' target='_blank' className="btn btn-dark btn-sm">Read more</a>
            </div>
       </div>
      </div>
    )
  }
}

export default NewsItem