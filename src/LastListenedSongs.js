import React from 'react';

const LastListenedSongs = ({lastListened, handleSongClick}) => {

    return(
        <ul className="sidebar-group">
            <h3 className="label">Historia odtwarzania</h3>
            {lastListened.length <= 0 && <span>Brak muzyki</span>}
            {lastListened.slice(-3).reverse().map( (song, key) => (
                <li key={key} className="sidebar-item">
                    <div className="artist-title">
                        <span className="title">{song.title}</span>
                        <span className="artist">{song.artist}</span>
                    </div>
                <button onClick={() => handleSongClick(song)}><i className='bx bx-play activeButton'></i></button>
            </li>
            ))}
        </ul>
    )
}

export default LastListenedSongs;