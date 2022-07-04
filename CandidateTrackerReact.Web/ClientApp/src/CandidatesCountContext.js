import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CandidatesContext = createContext();

const CandidatesContextComponent = ({ children }) => {
    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [RefusedCount, setRefusedCount] = useState(0);

    const updatePendingCount = async () => {
        const { data } = await axios.get('/api/candidates/getpendingcount');
        setPendingCount(data.count);
    }

    const updateConfirmedCount = async () => {
        const { data } = await axios.get('/api/candidates/getconfirmedcount');
        setConfirmedCount(data.count);
    }

    const updateRefusedCount = async () => {
        const { data } = await axios.get('/api/candidates/getrefusedcount');
        setRefusedCount(data.count);
    }

    useEffect(() => {
        updatePendingCount();
        updateConfirmedCount();
        updateRefusedCount();
    }, []);

    return (
        <CandidatesContext.Provider value={{ pendingCount, updatePendingCount, confirmedCount, updateConfirmedCount, RefusedCount, updateRefusedCount }}>
            {children}
        </CandidatesContext.Provider>
    )
}

const useCandidatesCount = () => {
    return useContext(CandidatesContext);
}

export { CandidatesContextComponent, useCandidatesCount };