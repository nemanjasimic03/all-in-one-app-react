import React, { useState, useEffect } from 'react';
import jedan from '../../assets/1.png';
import dva from '../../assets/2.png';
import tri from '../../assets/3.png';
import cetiri from '../../assets/4.png';
import playBtn from '../../assets/play.png';
import pauseBtn from "../../assets/pause.png"
import plus from '../../assets/plus.png';
import minus from '../../assets/minus.png';
import tone1 from '../../assets/tone1.wav';
import tone2 from '../../assets/tone2.flac'; 
import "./metronome.css"

const Metronome = () => {
  const [tempo, setTempo] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [beatMode, setBeatMode] = useState(1);
  const mainInterval = (60 / tempo) * 1000;

  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      intervalId = setInterval(playAudio, mainInterval);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [isPlaying, tempo, beatMode, mainInterval]);

  const playMainBeat = () => {
    new Audio(tone1).play();
  };

  const playIntermediateBeat = () => {
    if (beatMode !== 1) {
      new Audio(tone2).play();
    }
  };

  const playAudio = () => {
    if (beatMode === 1) {
      playMainBeat();
    } else if (beatMode === 2) {
      playMainBeat();
      setTimeout(playIntermediateBeat, mainInterval / 2);
    } else if (beatMode === 4) {
      // Analog-style alternating pattern for modes 3 and 4
      playMainBeat();
      setTimeout(playIntermediateBeat, mainInterval / 4);
      setTimeout(playIntermediateBeat, (mainInterval / 4) * 2);
      setTimeout(playIntermediateBeat, (mainInterval / 4) * 3);
    } else if(beatMode===3){
      playMainBeat();
      setTimeout(playIntermediateBeat, mainInterval / 3);
      setTimeout(playIntermediateBeat, (mainInterval/3)*2);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const setBeatModeHandler = (mode) => {
    setBeatMode(mode);
  };

  return (
    <div className="flex flex-col bg-neutral-900 opacity-90 h-[530px] self-center gap-10 justify-center w-[530px]">
      <div className="flex flex-row justify-center">
        <h1 className="text-[105px] font-bold text-orange-500 fancy-font">
          {tempo}
          <span className="text-[50px] fancy-font "> BPM</span>
        </h1>
      </div>
      <div className="flex justify-around items-center controlBar gap-3">
        <button onClick={() => setTempo((prevTempo) => Math.max(10, prevTempo - 1))}>
          <img src={minus} alt="" />
        </button>
        <input
          type="range"
          className="range-input"
          value={tempo}
          min={10}
          max={300}
          onChange={(e) => setTempo(parseInt(e.target.value))}
        />
        <button onClick={() => setTempo((prevTempo) => Math.min(300, prevTempo + 1))}>
          <img src={plus} alt="" />
        </button>
      </div>
      <div className="flex flex-row justify-center items-center">
        <button onClick={handlePlayPause} className="p-[20px] hover:bg-orange-500 rounded-full bg-white">
          <img src={isPlaying ? pauseBtn : playBtn} alt="play" className={`h-[35px] ${isPlaying ? 'pause' : 'play'}`} />
        </button>
      </div>
      <div className="flex justify-center items-center gap-4 notes">
        <div className={beatMode === 1 ? 'hovered' : ''}>
          <img
            src={jedan}
            alt=""
            onClick={() => setBeatModeHandler(1)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className={beatMode === 2 ? 'hovered' : ''} >
          <img
            src={dva}
            alt=""
            onClick={() => setBeatModeHandler(2)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className={beatMode === 3 ? 'hovered' : ''}>
          <img
            src={tri}
            alt=""
            onClick={() => setBeatModeHandler(3)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className={beatMode === 4 ? 'hovered' : ''}>
          <img
            src={cetiri}
            alt=""
            onClick={() => setBeatModeHandler(4)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Metronome;
