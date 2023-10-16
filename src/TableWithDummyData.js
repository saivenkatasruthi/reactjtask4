import React from 'react';

const TableWithDummyData = () => {
    const data = [
        {
            sno: 1,
            profilePic: 'Terry',
            firstName: 'Medhurst',
            lastName: '',
            gender: 'male',
            username: 'terry@dummyvision.com',
            domain: 'dummyvision.com',
            ip: '117.28.254',
            university: 'Capitol University',
        },
        {
            sno: 2,
            profilePic: 'Sheldon',
            firstName: 'Quigley',
            lastName: '',
            gender: 'male',
            username: 'sheldon@dummyvision.com',
            domain: 'dummyvision.com',
            ip: '254.120.0',
            university: 'Stanford Technical University',
        },
        {
            sno: 3,
            profilePic: 'Terri',
            firstName: 'Hille',
            lastName: '',
            gender: 'female',
            username: 'terri@dummyvision.com',
            domain: 'dummyvision.com',
            ip: '182.253.0',
            university: 'University of Oregon Valley',
        },
        {
            sno: 4,
            profilePic: 'Miles',
            firstName: 'Cuc',
            lastName: '',
            gender: '',
            username: '',
            domain: '',
            ip: '',
            university: '',
        },
    ];

    return (
        <div style={{ backgroundColor: '#000', padding: '1rem' }}>
            <table style={{ color: '#fff' }}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Profile Pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>IP</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.sno}>
                            <td>{row.sno}</td>
                            <td>{row.profilePic}</td>
                            <td>{row.firstName}</td>
                            <td>{row.lastName}</td>
                            <td>{row.gender}</td>
                            <td>{row.username}</td>
                            <td>{row.domain}</td>
                            <td>{row.ip}</td>
                            <td>{row.university}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableWithDummyData;
