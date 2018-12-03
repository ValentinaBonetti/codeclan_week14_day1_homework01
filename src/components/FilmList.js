import React from 'react';
import FilmRow from './FilmRow';

class FilmList extends React.Component {
  render() {

    const filmNodes = this.props.data.map(film => {
      return (
        <FilmRow key={film.id} url={film.url}>
          {film.name}
        </FilmRow>
      );
    })

    return (
      <div className="film-list">{filmNodes}</div>
    )

  }
}

export default FilmList;
