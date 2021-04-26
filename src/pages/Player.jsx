import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import SpotifyWebApi from 'spotify-web-api-node';
import { Container, Form, Item, Menu } from 'semantic-ui-react';
import Track from './../components/Tracks';
import SpotifyPlayer from '../components/SpotifyPlayer';

const spotifyWebApi = new SpotifyWebApi({
    clientId: 'fb453ef5b2ef4b788dfcb3a4839673b4'
});

export default function Player({code}) {
    const accessToken = useAuth(code);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [uri, setUri] = useState('');

    const selectTrack = (trackUri) => {
        setUri(trackUri);
    }

    useEffect(() => {
        if (!accessToken) return;
        console.log('here')
        spotifyWebApi.setAccessToken(accessToken);
        console.log(spotifyWebApi.getAccessToken());
    }, [accessToken]);

    useEffect(() => {
        if(!search) return setSearchResults([]);
        if(!accessToken) return;

        const timeout = setTimeout(() => {
            spotifyWebApi
                .searchTracks(search,  { limit: 20, offset: 0 })
                .then(data => {
                    setSearchResults(
                        data.body.tracks.items.map(track => {
                            const albumImage = track.album.images.reduce(
                                (smallest, image) => {
                                    return image.height < smallest.height ? image : smallest;
                                },track.album.images[0]
                            );

                            return {
                                artist: track.artists,
                                title: track.name,
                                uri: track.uri,
                                albumUrl: albumImage.url,
                            }
                        })
                    )
                    console.log(data.body);
                })
                .catch((err) => {
                    console.log(err, 'ERROR');
                    setSearchResults([]);
                });
        }, 300);
        console.log(searchResults);
        return () => clearTimeout(timeout);
    }, [accessToken, search])

    return (
        <Container style={{paddingTop: '50px', height: '100vh', background: 'white'}} >
            <Form style={{paddingBottom: '50px'}}>
                <Form.Field style = {{margin: 0}}>
                    <Form.Input 
                        placeholder="Search" 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}/>
                </Form.Field>
                <Item.Group divided style={{paddingTop: '10px'}}>
                    {searchResults.map((results) => (
                    <Track 
                            artist = {results.artist}
                            title = {results.title}
                            uri = {results.uri}
                            albumUrl = {results.albumUrl}
                            key={results.uri}
                            selectTrack={selectTrack}
                            /> 
                    ))}
                </Item.Group>
            </Form>
            <Container style={{bottom: 0, position:'fixed'}}>
                <SpotifyPlayer accessToken={accessToken} uri={uri} />    
            </Container>

        </Container>
    )
}
