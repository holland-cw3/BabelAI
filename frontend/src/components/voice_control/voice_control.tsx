import { MicrophoneIcon } from '@heroicons/react/24/outline';
// import { useState } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import "./voice_control.css";


export default function VoiceControl() {
    return (
        <div className="bubble">
            <div className="icon-box"><MicrophoneIcon /></div>
        </div>
    );
}

