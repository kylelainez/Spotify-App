import React from 'react';
import './LoginPage.css';
import { Container, Header, Button } from 'semantic-ui-react';
import axios from 'axios';

export default function LoginPage() {

    const URL = 'https://accounts.spotify.com/authorize?scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&client_id=fb453ef5b2ef4b788dfcb3a4839673b4&response_type=code&redirect_uri=http://localhost:3000';

    return (
        <Container style={{ marginTop: '3em' }}>
            <Header as="h1" textAlign="center">Spotify Music Player</Header>
            <Button href={URL}> Login </Button>
        </Container>
    )
}
