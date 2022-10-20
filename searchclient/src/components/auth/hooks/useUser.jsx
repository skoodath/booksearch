import { useState, useEffect } from 'react';
import useToken from './useToken';

const useUser = () => {
  const [token] = useToken()

  const getPayload = () => {
    const encodedPayload = token.split(".")[1]
    return JSON.parse(atob(encodedPayload))
  }
  const [user, setUser] = useState(() => {
    if(!token) return null;
    return getPayload()
  })

  useEffect(() => {
    if(!token) {
      setUser(null)
    } else {
      setUser(getPayload(token))
    }
  }, [token])
  return user;
}

export default useUser;