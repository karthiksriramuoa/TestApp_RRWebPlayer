# rrweb Sample App

This sample application demonstrates how to record user sessions with `rrweb` and play them back using `rrweb-player`.

## Features

- Record user interactions on the web page.
- Playback recorded sessions within the app.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone this repository or download the zip file and extract it.
2. Navigate to the project directory:

cd rrweb-sample-app

3. Install the necessary dependencies:
npm install


## Running the App

To serve the app locally, you can use a static file server. If you have Python installed, a simple way to do this is:

For Python 3.x:
python3 -m http.server


Alternatively, you can use npm package `serve`:
npm install -g serve serve .


Open your browser and go to `http://localhost:8000` to view the app.

## Recording Sessions

- Interact with the web page. Your interactions are automatically recorded.
- Before closing the tab or navigating away, ensure the data is saved if you're using local storage for session data.

## Playback Recorded Sessions

- Upon reloading or revisiting the page, the recorded session will automatically play back if it was previously saved in local storage.
