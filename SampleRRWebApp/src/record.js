import { record } from 'rrweb';

let events = []; // This will store our events

record({
  emit(event) {
    events.push(event);
  },
});

// Optionally, save events to local storage or send to a server
window.addEventListener('beforeunload', () => {
  localStorage.setItem('recordedEvents', JSON.stringify(events));
});