import React from 'react';

export default React.createContext({
    records: [],
    addReport: () => {},
    deleteReport: () => {},
    editReport: () => {}
})