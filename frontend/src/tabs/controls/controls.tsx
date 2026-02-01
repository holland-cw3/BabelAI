import { MicrophoneIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { WebviewWindow } from '@tauri-apps/api/webviewWindow'
import { useState } from 'react';
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
    const [listening, setListening] = useState(false);

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;


    recognition.onresult = (event: SpeechRecognitionEvent) => {
        const res = event.results[0][0].transcript;

        setListening(false);

        fetch('http://127.0.0.1:5000/command', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                command: res,
            })
        }).catch(error => alert('Error: ' + error.message));


    };

    recognition.onerror = (event: any) => {
        console.error("Speech recognition error:", event);
    };


    const handleClick = () => {
        recognition.start();
        setListening(true)
    };



    return (
        <div className='control-bar draggable'>
            <div className={`bubble ${listening ? 'listening' : ''} no-drag`}>
                <div className="icon-box" onClick={handleClick}><MicrophoneIcon /></div>
            </div>

            <div className='bubble settings' onClick={openSettings}>
                <div className="icon-box no-drag"><Cog6ToothIcon /></div>
            </div>
        </div>
    );
}

