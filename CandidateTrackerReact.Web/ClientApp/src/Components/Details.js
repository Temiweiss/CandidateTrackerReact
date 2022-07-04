import React, { useEffect, useState } from 'react';
import { useCandidatesCount } from '../CandidatesCountContext';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';

const Details = () => {
    const { id } = useParams();
    const history = useHistory();
    const { updateRefusedCount, updateConfirmedCount, updatePendingCount } = useCandidatesCount();
    const [candidate, setCandidate] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        notes: '',
        status: ''
    });

    useEffect(() => {
        const getCandidateById = async () => {
            const { data } = await axios.get(`/api/candidates/getcandidatebyid?id=${id}`);
            setCandidate(data);
        }
        getCandidateById();
    }, []);


    const onConfirmClick = async () => {
        await axios.post(`/api/candidates/confirmcandidate?id=${id}`);
        updateConfirmedCount();
        updatePendingCount();
        history.push('/confirmed');
    }

    const onRefuseClick = async () => {
        await axios.post(`/api/candidates/refusecandidate?id=${id}`);
        updateRefusedCount();
        updatePendingCount();
        history.push('/refused');
    }

    const { firstName, lastName, email, phoneNumber, notes, status } = candidate;
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Name: {firstName} {lastName}</h4>
                        <h4>Email: {email}</h4>
                        <h4>Phone: {phoneNumber}</h4>
                        <h4>Status: {status}</h4>
                        <h4>Notes:</h4>
                        <p>{notes}</p>
                        <div>
                            <button className="btn btn-primary" onClick={onConfirmClick}>Confirm</button>
                            <button className="btn btn-danger" onClick={onRefuseClick}>Refuse</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;