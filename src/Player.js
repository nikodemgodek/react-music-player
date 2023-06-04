import React from 'react';
import { useState, useEffect } from 'react';
import Slider from './Slider';

const Player = ({audioRef, lastListened, setLastListened, songProps, playProps, musicFunctions}) => {

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.5);

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    }

    const handleSliderChange = (value) => {
        setCurrentTime(value);
        audioRef.current.currentTime = value;
        console.log('app:', value);
    }

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    }

    const isMusicLoaded = () => {
        const audio = audioRef.current;
        return audio.readyState >= 3;
    }

    useEffect( () => {
        console.log("Saved to last listened?");
        const song = {
            title: songProps.currentSong.title,
            artist: songProps.currentSong.artist,
            image: songProps.currentSong.image,
            src: songProps.currentSong.src
        }

        console.log(song);

        setLastListened([...lastListened, song]);
    }, [songProps.currentSong])

    return(
        <div className="container">
        <div className="music-wrapper">
            <div className="album-image">
                <img src={songProps.currentSong.image} width="50px" height="50px"/>
            </div>
            <div className="artist-title">
                <span className="title">{songProps.currentSong.title}</span>
                <span className="artist">{songProps.currentSong.artist}</span>
            </div>
        </div>
        <div className="control-wrapper">
            <div className="controls">
                <button onClick={musicFunctions.previous}><i className='bx bx-left-arrow-alt'></i></button>
                <button onClick={musicFunctions.playpause}> { playProps.isPlaying ? <i className='bx bx-pause' ></i> : <i className='bx bx-play'></i>}</button>
                <button onClick={musicFunctions.next}><i className='bx bx-right-arrow-alt'></i></button>
            </div>
            <audio ref={audioRef} src={songProps.currentSong.src} onTimeUpdate={handleTimeUpdate}/>
            <Slider value={currentTime} onChange={handleSliderChange} duration={duration}/>

        </div>
        <div className="volume-wrapper">
            <i className='bx bx-volume-full icon' ></i>
            <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange}/>
        </div>
    </div>
    )
}

export default Player;