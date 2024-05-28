import rrwebPlayer from "rrweb-player";

document.addEventListener('DOMContentLoaded', () => {
  const events = JSON.parse(localStorage.getItem('recordedEvents') || '[]');
  if (events.length > 0) {
    new rrwebPlayer(events).start();
  }
});
