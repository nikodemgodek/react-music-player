import React from 'react';
import { useState} from 'react';

const Slider = ( {value, onChange, duration} ) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = () => {
        setIsDragging(true);
    };
    
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleChange = (e) => {
        onChange(e.target.value);
        console.log(e.target.value);
    }

    const formatDuration = (duration) => {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration & 60);
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    return(
        <div className="slider-wrapper">
            <div className="time">
                <span>{isNaN(duration) ? `0:00` : formatDuration(duration)}</span>
            </div>
            <div className="slider">
                <input 
                    className="ranger" 
                    type="range"
                    min="0"
                    max={duration}
                    value={value}
                    onChange={handleChange}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                />
            </div>
            <div className="time">
                <span>{isNaN(duration) ? `0:00` : formatDuration(duration)}</span>
            </div>
        </div>
    )
}

export default Slider;