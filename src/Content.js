import { useState, useEffect } from 'react';
import PlaylistSongList from './PlaylistSongList';

const Content = ({selectedPlaylist, handleSongClick}) => {

    return (
        <div className="content-container">
            <div className="content-wrapper">
                <div className="album">
                    {!selectedPlaylist.image ? 
                        <img style={{background: 'white'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/%3Fuestionmark.svg/1200px-%3Fuestionmark.svg.png" />
                        :
                        <img src={selectedPlaylist.image}
                    />}
                </div>
                <div className="album-details-container">
                    <div className="album-details">
                        <h1>{selectedPlaylist.name}</h1>
                        <span style={{ fontSize: '12px'}}>Utworzona przez: {selectedPlaylist.createdBy}</span>
                    </div>
                </div>
            </div>
            <PlaylistSongList handleSongClick={handleSongClick} selectedPlaylist={selectedPlaylist}/>
        </div>
    )
}

export default Content;