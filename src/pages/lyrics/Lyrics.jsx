
import { useState } from "react";
import axios from "axios";
import "./Lyrics.css";

function Lyrics() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchLyrics = async () => {
    if (!artist || !song) {
      setError("Please enter both artist and song name.");
      return;
    }

    setLoading(true);
    setError("");
    setLyrics("");

    try {
      const response = await axios.get(
        `https://api.lyrics.ovh/v1/${artist}/${song}`
      );
      setLyrics(response.data.lyrics);
    } catch (err) {
      setError("Lyrics not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lyrics-container">
      <h1>Music Lyrics Finder</h1>
      <div className="lyrics-search--container">
        <input
          type="text"
          placeholder="Enter artist name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter song name"
          value={song}
          onChange={(e) => setSong(e.target.value)}
        />
        <button className="lyrics-button" onClick={fetchLyrics}>Get Lyrics</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {lyrics && (
        <div className="lyrics">
          <h2>Lyrics:</h2>
          <pre>{lyrics}</pre>
        </div>
      )}
    </div>
  );
}

export default Lyrics;
