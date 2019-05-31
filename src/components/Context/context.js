import React from 'react';

export default React.createContext({
    user: undefined,
    error: undefined,
    handleUser: user => {}
})