import React, { useState, useEffect } from 'react'
import SpotifyWebPlayer from 'react-spotify-web-playback';

export default function SpotifyPlayer({ accessToken, uri }) {
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [uri])

    if (!accessToken) return null;
    return (
        <SpotifyWebPlayer 
            token={accessToken}
            uris={uri}
            callback = {state => {
                if (!state.isPlaying) setPlay(false)
            }}
            play ={play}
            name="Spotify React"
            styles={{
                sliderHandleColor: '#000',
                sliderColor: '#1db954'
            }}
        />
    )
}
