// import React from 'react';
// import ConditionalRouting from '../components/Sections/ConditionalRounting.jsx';

// const Home = () => {
//     return (
//         <>
//         <h1>hi</h1>
//             <ConditionalRouting />
//         </>
//     );
// };

// export default Home;


import React from 'react';
import ConditionalRouting from '../components/ConditionalRounting.jsx';

const Home = () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-4">Hi, {userData?.name} 👋</h1>
            <span className="text-lg mb-2">📧 Email: {userData?.email}</span> 
            <p className="text-lg mb-4">📱Mobile: {userData?.mobile}</p>
            <ConditionalRouting />
        </div>
    );
};

export default Home;
