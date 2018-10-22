
import React, { Component } from 'react';
class Books extends React.Component {

  render(){
    const {width,height,backgroundImage,title, author} = this.props
    const url = "http://books.google.com/books/content?id=" + backgroundImage
    return(
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: width, height: height, backgroundImage: `url(${url})` }}></div>
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
     </div>)
  }

}

export default Books
