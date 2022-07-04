import React, { useEffect, useState } from 'react';
import CandidatesRow from '../Components/CandidatesRow';
import axios from 'axios';

const Confirmed = () => {

    const [confirmedCandidates, setConfirmedCandidates] = useState([]);

    useEffect(() => {
        const getConfirmed = async () => {
            const { data } = await axios.get('/api/candidates/getconfirmedcandidates');
            setConfirmedCandidates(data);
        }
        getConfirmed();
    }, []);



    return (
        <div className="container">
            <div>
                <h1>Confirmed</h1>
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
                            {confirmedCandidates.map((p, k) => <CandidatesRow candidate={p} key={k} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Confirmed;