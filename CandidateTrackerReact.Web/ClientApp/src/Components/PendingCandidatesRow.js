import React from 'react';


const PendingCandidatesRow = ({ pendingCandidate }) => {
    const { id, firstName, lastName, email, phoneNumber, notes } = pendingCandidate;
    return <tr>
        <td><a href={`components/details/${id}`}>View Details</a>
        </td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{phoneNumber}</td>
        <td>{email}</td>
        <td>{notes}</td>
    </tr >
}
export default PendingCandidatesRow;