import { useState, useEffect } from "react"
import axios from "axios"

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios
            .post('/api/spotify/login', {
            code
            })
            .then(response => {
                setAccessToken(response.data.access_token);
                setRefreshToken(response.data.refresh_token);
                setExpiresIn(response.data.expires_in);
            })
            .catch( (err) => {
                console.log(err);
                window.location = '/';
            });
    }, [code]);

    useEffect(() => {
        if (!refreshToken || !expiresIn) return;
        const interval = setInterval(()=> {
            axios
            .post('/api/spotify/refresh', {
                refreshToken
            })
            .then(response => {
                setAccessToken(response.data.access_token);
                setExpiresIn(response.data.expires_in);
            })
            .catch( (err) => {
                console.log(err);
                window.location = '/';
            });
        }, (expiresIn -60) * 1000);
        
        return () => clearInterval(interval);
    }, [refreshToken, expiresIn]);
   
    
    return accessToken;
}
