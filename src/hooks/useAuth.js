import { useState, useEffect } from "react"
import axios from "axios"

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    axios.post('/api/spotify/login', {
        code
    });
}
