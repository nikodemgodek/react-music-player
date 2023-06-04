import React from 'react';
import './App.css';
import Player from './Player';
import Sidebar from './Sidebar';
import Content from './Content';
import AddPlaylistForm from './AddPlaylistForm';

import { useState, useRef, useEffect } from 'react';

const songs = [
  {
    title: "Gwiazda",
    artist: "Akcent",
    image: "https://discopolonew.eu/wp-content/uploads/2022/10/Akcent-Zycie-to-sa-chwile-Nowa-Wersja-480x272.jpg",
    src: "https://archive.org/download/AkcentGwiazda/Akcent%20-%20Gwiazda.mp3"
  },
  {
    title: "Ona Tańczy Dla Mnie",
    artist: "Weekend",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rados%C5%82aw_Liszewski.JPG",
    src: "http://www.weekend.fm/mp3/OnaTanczy.mp3"
  },
]

const playlists = [
  {
      id: 0,
      name: "Standardowa playlista",
      createdBy: "Unknown creator",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rados%C5%82aw_Liszewski.JPG",
      songs: [
            {
              title: "Ona Tańczy Dla Mnie",
              artist: "Weekend",
              image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rados%C5%82aw_Liszewski.JPG",
              src: "http://www.weekend.fm/mp3/OnaTanczy.mp3"
            },
            {
              title: "Ona Tańczy Dla Mnie",
              artist: "Weekend",
              image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rados%C5%82aw_Liszewski.JPG",
              src: "http://www.weekend.fm/mp3/OnaTanczy.mp3"
            },
            {
              title: "Ona Tańczy Dla Mnie",
              artist: "Weekend",
              image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rados%C5%82aw_Liszewski.JPG",
              src: "http://www.weekend.fm/mp3/OnaTanczy.mp3"
            },
            {
              title: "Ona Tańczy Dla Mnie",
              artist: "Weekend",
              image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rados%C5%82aw_Liszewski.JPG",
              src: "http://www.weekend.fm/mp3/OnaTanczy.mp3"
            },
            {
              title: "Ona Tańczy Dla Mnie",
              artist: "Weekend",
              image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rados%C5%82aw_Liszewski.JPG",
              src: "http://www.weekend.fm/mp3/OnaTanczy.mp3"
            },
            {
              title: "Ona Tańczy Dla Mnie",
              artist: "Weekend",
              image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rados%C5%82aw_Liszewski.JPG",
              src: "http://www.weekend.fm/mp3/OnaTanczy.mp3"
            },
            {
              title: "Ona Tańczy Dla Mnie",
              artist: "Weekend",
              image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rados%C5%82aw_Liszewski.JPG",
              src: "http://www.weekend.fm/mp3/OnaTanczy.mp3"
            },
            {
              title: "Ona Tańczy Dla Mnie",
              artist: "Weekend",
              image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rados%C5%82aw_Liszewski.JPG",
              src: "http://www.weekend.fm/mp3/OnaTanczy.mp3"
            },
            {
              title: "Ona Tańczy Dla Mnie",
              artist: "Weekend",
              image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rados%C5%82aw_Liszewski.JPG",
              src: "http://www.weekend.fm/mp3/OnaTanczy.mp3"
            },
            {
              title: "Ona Tańczy Dla Mnie",
              artist: "Weekend",
              image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rados%C5%82aw_Liszewski.JPG",
              src: "http://www.weekend.fm/mp3/OnaTanczy.mp3"
            },
            {
              title: "Ona Tańczy Dla Mnie",
              artist: "Weekend",
              image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rados%C5%82aw_Liszewski.JPG",
              src: "http://www.weekend.fm/mp3/OnaTanczy.mp3"
            },
            {
              title: "Ona Tańczy Dla Mnie",
              artist: "Weekend",
              image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rados%C5%82aw_Liszewski.JPG",
              src: "http://www.weekend.fm/mp3/OnaTanczy.mp3"
            },
            {
              title: "Ona Tańczy Dla Mnie",
              artist: "Weekend",
              image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rados%C5%82aw_Liszewski.JPG",
              src: "http://www.weekend.fm/mp3/OnaTanczy.mp3"
            }
      ]
  },
  {
      id: 1,
      name: "Playlista #2",
      createdBy: "Unknown creator",
      image: "https://discopolonew.eu/wp-content/uploads/2022/10/Akcent-Zycie-to-sa-chwile-Nowa-Wersja-480x272.jpg",
      songs: [
          {
              title: "Gwiazda",
              artist: "Akcent",
              image: "https://discopolonew.eu/wp-content/uploads/2022/10/Akcent-Zycie-to-sa-chwile-Nowa-Wersja-480x272.jpg",
              src: "https://archive.org/download/AkcentGwiazda/Akcent%20-%20Gwiazda.mp3"
          },
      ]
  },
]

const App = () => {

  const [lastListened, setLastListened] = useState([]);
  const audioRef = useRef(null);

  const [currentSong, setCurrentSong] = useState(songs[0]);
  const songProps = { currentSong, setCurrentSong}

  const [isPlaying, setIsPlaying] = useState(false);
  const playProps = { isPlaying, setIsPlaying };

  const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0]);
  const [playlistLibrary, setPlaylistLibrary] = useState(playlists);

  const [formOpened, setFormOpened] = useState(false);

  const handlePlayPauseClick = () => {
    if (isPlaying) {
        audioRef.current.pause();
    } else {
        audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  const handleSongClick = async (song) => {
      audioRef.current.pause();
      setIsPlaying(false);
      audioRef.current.src = song.src;
      await audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
  }

  const handleNextSongClick = () => {
      const currentIndex = songs.findIndex((song) => song.src === songProps.currentSong.src);
      const nextIndex = currentIndex === songs.length - 1 ? 0 : currentIndex + 1;
      const nextSong = songs[nextIndex];
      handleSongClick(nextSong);
  }

  const handlePrevSongClick = () => {
      const currentIndex = songs.findIndex((song) => song.src === songProps.currentSong.src);
      const prevIndex = currentIndex === 0 ? songs.length -1 : currentIndex - 1;
      const prevSong = songs[prevIndex];
      handleSongClick(prevSong);
  }

  const musicFunctions = {
    playpause: handlePlayPauseClick,
    next: handleNextSongClick,
    previous: handlePrevSongClick
  }

  const changePlaylist = (playlist) => {
    setSelectedPlaylist(playlist);
    console.log(selectedPlaylist);
  }

  useEffect( () => {
    console.log(currentSong);
    console.log(isPlaying);
  }, [])
  return(
    <>    
      <Player audioRef={audioRef} songs={songs} 
        lastListened={lastListened} setLastListened={setLastListened} 
        songProps={songProps} playProps={playProps} musicFunctions={musicFunctions}
      />

      <Sidebar playlistLibrary={playlistLibrary} setPlaylistLibrary={setPlaylistLibrary} selectedPlaylist={selectedPlaylist} changePlaylist={changePlaylist} playlists={playlists} audioRef={audioRef} lastListened={lastListened} setLastListened={setLastListened} handleSongClick={handleSongClick}/>
      <Content handleSongClick={handleSongClick} selectedPlaylist={selectedPlaylist} />
      {formOpened && <AddPlaylistForm/>}
    </>
  )
}

export default App;