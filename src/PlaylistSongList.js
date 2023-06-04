import React from 'react';

const PlaylistSongList = ({selectedPlaylist, handleSongClick}) => {
    return(
        <div className="songslist-container">
            {selectedPlaylist.songs.length === 0 ? <div className="songslist-table">No songs</div> : (
            <div className="songslist-table">
                <div className="songslist-row">
                    <div className="songslist-cell">#</div>
                    <div className="songslist-cell flex">Title</div>
                    <div className="songslist-cell flex">Album</div>
                    <div className="songslist-cell flex">Date added</div>
                    <div className="songslist-cell flex"><i class='bx bx-time-five'></i></div>
                </div>
                <div className="songslist-songs" style={{ overflowY: 'scroll' }}>
                    {selectedPlaylist.songs.map( (song, idx) => (
                        <div onClick={() => handleSongClick(song)} key={idx} className="songslist-row item">
                        <div className="songslist-cell">{idx+1}</div>
                        <div className="songslist-cell flex">{song.title}</div>
                        <div className="songslist-cell flex">{song.author}</div>
                        <div className="songslist-cell flex">3 days ago</div>
                        <div className="songslist-cell flex">3:12</div>
                    </div> 
                    ))}
                </div>
            </div>)}
        </div>
    )}
export default PlaylistSongList;