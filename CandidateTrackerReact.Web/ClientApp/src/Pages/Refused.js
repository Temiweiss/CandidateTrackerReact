import React, { useEffect, useState } from 'react';
import CandidatesRow from '../Components/CandidatesRow';
import axios from 'axios';

const Refused = () => {

    const [refusedCandidates, setRefusedCandidates] = useState([]);

    useEffect(() => {
        const getRefused = async () => {
            const { data } = await axios.get('/api/candidates/getrefusedcandidates');
            setRefusedCandidates(data);
        }
        getRefused();
    }, []);



    return (
        <div className="container">
            <div>
                <h1>Refused</h1>
                <div>
                    <table className="table table-hover table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {refusedCandidates.map((p, k) => <CandidatesRow candidate={p} key={k} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Refused;