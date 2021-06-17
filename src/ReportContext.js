import React from 'react';

export default React.createContext({
    records: [],
    fetchData: () => {},
    deleteReport: () => {},
    editReport: () => {}
})