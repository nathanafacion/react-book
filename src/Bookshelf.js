import React, { Component } from 'react';
import Books from './Books'

class Bookshelf extends React.Component {

  render(){
    const {bookshelf} = this.props
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title"> {bookshelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
           {bookshelf.books.map((item, index) => (
              <li>
                <Books
                   width={item.width}
                   height={item.height}
                   backgroundImage={item.backgroundImage}
                   title={item.title}
                   author = {item.author} />
              </li>
            ))};

          </ol>
        </div>
      </div>)
  }

}

export default Bookshelf
