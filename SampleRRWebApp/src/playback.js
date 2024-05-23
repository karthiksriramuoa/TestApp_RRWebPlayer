import Replayer from "rrweb-player"

document.addEventListener('DOMContentLoaded', () => {
  const events = JSON.parse(localStorage.getItem('recordedEvents') || '[]');
  if (events.length > 0) {
    new Replayer(events, {
      root: document.getElementById('app')
    }).start();
  }
});