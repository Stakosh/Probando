import React, { useState } from 'react';
import axios from 'axios';

function TaylorSwiftLyrics() {
  const [songName, setSongName] = useState('');
  const [lyrics, setLyrics] = useState('');

  const searchLyrics = async () => {
    try {
      const response = await axios.get(
        `https://api.genius.com/search?q=${songName}`,
        {
          headers: {
            'Authorization': `XlWFgJLUdir7Z1PSwhyeTWDhLeaLJCl19tMlT4nKs3QIqLyA3ESp6hs8YK3se7iv`, // Replace with your Genius API access token
            'Client-ID': 'pcG0U8KbRDNH9zTIyeQFHnoXT0lqVQZbsSkKGSJyi_1lZvOcIP_w7rT7byWaWpFR', // Replace with your Genius API client ID
          },
        }
      );

      if (response.data.response.hits.length === 0) {
        alert('No lyrics found for this song.');
        return;
      }

      const songURL = response.data.response.hits[0].result.url;
      window.open(songURL); // Open the Genius page for the song in a new tab
    } catch (error) {
      console.error(error);
      alert('There was an error while fetching the lyrics.');
    }
  };

  return (
    <div>
      <h1>Taylor Swift Lyrics Search</h1>
      <div className="form-group">
        <label htmlFor="songName">Enter the name of a Taylor Swift song:</label>
        <input
          type="text"
          className="form-control"
          id="songName"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={searchLyrics}>
        Search Lyrics
      </button>
    </div>
  );
}

export default TaylorSwiftLyrics;
