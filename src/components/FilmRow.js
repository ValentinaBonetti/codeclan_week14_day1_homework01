import React from 'react';

class FilmRow extends React.Component {

  render() {
    return(
      <div className="film-row" >
        <a href={this.props.url}>{this.props.children}</a>
      </div>
    )
  }
}

export default FilmRow;
