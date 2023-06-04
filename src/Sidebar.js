import LastListenedSongs from './LastListenedSongs.js';
import Playlist from './Playlist.js';

const Sidebar = ({setPlaylistLibrary, playlistLibrary, lastListened, audioRef, handleSongClick, playlists, setSelectedPlaylist, changePlaylist, selectedPlaylist}) => {
    return(
        <div className="sidebar-container">
            <div className="sidebar-wrapper">
                <Playlist playlistLibrary={playlistLibrary} setPlaylistLibrary={setPlaylistLibrary} selectedPlaylist={selectedPlaylist} changePlaylist={changePlaylist} setSelectedPlaylist={setSelectedPlaylist} playlists={playlists} />
                <LastListenedSongs audioRef={audioRef} lastListened={lastListened} handleSongClick={handleSongClick}/>
            </div>
        </div>
    )
}

export default Sidebar;