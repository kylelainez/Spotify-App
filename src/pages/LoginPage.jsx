import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import axios from 'axios';

export default function LoginPage() {

    const URL = 'https://accounts.spotify.com/authorize?scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&client_id=fb453ef5b2ef4b788dfcb3a4839673b4&response_type=code&redirect_uri=https://spotify-react-kyle.herokuapp.com';

    return (
        <Container style={{ display: 'flex', justifyContent: 'center', flexDirection:'column', alignItems:'center', height: '100vh'}}>
            <Header as="h1" textAlign="center" style={{color: '#FFF'}}>Spotify Music Player</Header>
            <Button href={URL} color='green' size="massive"> Login with Spotify </Button>
        </Container>
    )
}
