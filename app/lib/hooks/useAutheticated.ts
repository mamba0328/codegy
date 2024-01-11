import React, {useState, useEffect} from "react";
import { refreshToken, verifyToken } from "../actions";

export const useAuthenticated = async () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const checkTokenIsOk = async () => {
        try {
            await verifyToken();
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
    const getNewToken = async () => {
        try{
            const response = await refreshToken();
            const {token} = response.data;
            localStorage.setItem('token', token);
            return true
        } catch (error){
            console.log('Token failed to refresh', error)
            return false
        }
    }

    const authenticate = async () => {
        const tokenIsOk = await checkTokenIsOk();
        const tokenIsRefreshed = !tokenIsOk && await getNewToken();

        return tokenIsOk || tokenIsRefreshed ? setIsAuthenticated(true) : setIsAuthenticated(false);
    }

    useEffect(() => {
        authenticate();
    }, []);

    return isAuthenticated
}