import React from 'react';

export default React.createContext({
    reports: [],
    fetchData: () => {},
    deleteReport: () => {},
    editReport: () => {}
})