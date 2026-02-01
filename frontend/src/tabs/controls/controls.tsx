import { MicrophoneIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { WebviewWindow } from '@tauri-apps/api/webviewWindow'
import { useEffect } from 'react';
import "./controls.css";


async function openSettings() {
    const webview = new WebviewWindow('settings', {
        url: '/settings',
        width: 550,
        height: 650,
        resizable: true
    })

    webview.once('tauri://created', function () {
        console.log('Successfully created')
    })

    webview.once('tauri://error', function (e) {
        alert(JSON.stringify(e, Object.getOwnPropertyNames(e), 2));
    })

}

export default function Controls() {
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
        <div className='control-bar draggable'>
            <div className={`bubble ${listening ? 'listening' : ''} no-drag`} onClick={handleClick}>
                <div className="icon-box" >
                    <MicrophoneIcon />
                </div>
            </div>

            <div className='bubble settings' onClick={openSettings}>
                <div className="icon-box no-drag">
                    <Cog6ToothIcon />
                </div>
            </div>
        </div>
    );
}
