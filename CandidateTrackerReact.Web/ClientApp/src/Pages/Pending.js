import React, { useEffect, useState } from 'react';
import PendingCandidatesRow from '../Components/PendingCandidatesRow';
import axios from 'axios';

const Pending = () => {

    const [pendingCandidates, setPendingCandidates] = useState([]);

    useEffect(() => {
        const getPending = async () => {
            const { data } = await axios.get('/api/candidates/getpendingcandidates');
            setPendingCandidates(data);
        }
        getPending();
    }, []);



    return (
        <div className="container">
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {pendingCandidates.map((p, k) => <PendingCandidatesRow pendingCandidate={p} key={k} />)}
                </tbody>
            </table>
        </div>
    )
}

export default Pending;