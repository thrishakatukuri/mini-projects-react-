import React, { useState } from 'react';
import Dashboard from './Dashboard';

const ConditionalRouting = () => {
    const [showDashboard, setShowDashboard] = useState(false);
    const [role, setRole] = useState("");

    const renderRoleContent = () => {
        switch (role) {
            case 'Guest':
                return <span className="text-pink-500 font-semibold mt-4 text-center">Hello My Dear Guest 🙌</span>;
            case 'Admin':
                return <span className="text-green-600 font-semibold mt-4 text-center">Hello beautiful🫣 Admin</span>;
            case 'Editor':
                return <span className="text-blue-600 font-semibold mt-4 text-center">Hello Multi-talented😜 Editor</span>;
            case 'Viewer':
                return <span className="text-orange-600 font-semibold mt-4 text-center">Hello Spy🧐 Viewer😏</span>;
            default:
                return null;
        }
    };

    return (
        <div className="text-center mt-10 flex flex-col w-full">
            <div className="bg-gray-100 text-white p-4 rounded m-5">
                <h1 className="font-bold text-red-800 text-xl mb-2">React Conditional Rendering Examples</h1>
                <h6 className="text-xs text-blue-800 mb-3">Hover on Dashboard to see notifications</h6>

                <div
                    className="text-yellow-500 font-bold text-3xl cursor-pointer"
                    onClick={() => setShowDashboard(true)}
                    onDoubleClick={() => setShowDashboard(false)}> Dashboard</div>
                    {showDashboard && (
                    <div className="mt-4 bg-white text-black p-4 border text-xl rounded shadow-md"><Dashboard /></div> )}
            </div>

            <hr className="m-1" />

            <div className="bg-gray-100 text-black p-5 rounded m-5">
                <label htmlFor="roleSelect" className="font-semibold mr-2">Select User Role:</label>
                <select id="roleSelect" className="border bg-black text-white px-2 py-1 rounded" onChange={(e) => setRole(e.target.value)}>
                    <option value="Guest">Guest</option>
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Viewer">Viewer</option>
                </select>

                <h1 className="mt-4 text-lg font-medium justify-center">
                    Welcome {renderRoleContent() || "Guest"}
                </h1>
            </div>
        </div>
    );
};

export default ConditionalRouting;
