import React from 'react';

const Playlist = ( {setPlaylistLibrary, playlistLibrary, playlists, changePlaylist, selectedPlaylist} ) => {

    const createPlaylist = () => {

        const newPlaylistElement = {
            name: "Nowa playlista",
            createdBy: "Unknown creator",
            image: "",
            songs: []
        }
        setPlaylistLibrary([...playlistLibrary, newPlaylistElement])
    }
    return(
        <ul className="sidebar-group">
            <h3 style={{ display: 'flex', alignItems: 'center' }} className="label">Twoje playlisty <span style={{ marginLeft: '.4rem' }}><i onClick={createPlaylist} className='bx bxs-plus-circle activeButton'></i></span></h3>
            {playlistLibrary.map( (playlist, index) => (
                <li key={index} className="sidebar-item">
                    <span className={`button-playlist ${selectedPlaylist.id === playlist.id ? 'selected' : ''}`} onClick={() => changePlaylist(playlist)}>{playlist.name}</span>
                </li>
            ))}
        </ul>
    )
}

export default Playlist;