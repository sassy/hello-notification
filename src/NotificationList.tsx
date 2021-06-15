import React from 'react';
import './NotificationList.css';
import sound from './sound.mp3';

function notifyX() {
    const item = new Notification('こんにちは');
}


function notify() {
    switch(Notification.permission) {
    case 'granted':
        notifyX();
        break;
    case 'denied':
        break;
    default:
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                notifyX();
            }
        });
        break;
    }
}

function notifyWithSoundX() {
    const item = new Notification('こんにちは');
    item.addEventListener('show', () => {
        const audio = new Audio(sound);
        audio.play();
    })
}

function notifyWithSound() {
    console.log('test');
    switch(Notification.permission) {
        case 'granted':
            notifyWithSoundX();
            break;
        case 'denied':
            break;
        default:
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    notifyWithSoundX();
                }
            });
            break;
    }
}

function NotificationList() {
  return (
    <div>
      <button className="button" onClick={() => notify()}>通知</button>
      <br />
      <button className="button" onClick={() => notifyWithSound()}>通知音つき</button>
    </div>
  );
}

export default NotificationList;
