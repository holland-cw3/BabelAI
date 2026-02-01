import { MicrophoneIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "./voice_control.css";



export default function VoiceControl() {
    const { transcript, listening, resetTranscript } = useSpeechRecognition();


    useEffect(() => {
        if (!listening && transcript) {
            fetch('http://127.0.0.1:5000/command', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    command: transcript,
                })
            }).catch(error => alert('Error: ' + error.message));

            resetTranscript();
        }
    }, [listening, transcript, resetTranscript]);

    const handleClick = () => {
        SpeechRecognition.startListening({ continuous: false });
    };

    return (
        <div className={`bubble ${listening ? 'listening' : ''}`}>
            <div className="icon-box" onClick={() => { handleClick() }}><MicrophoneIcon /></div>
        </div>
    );
}

