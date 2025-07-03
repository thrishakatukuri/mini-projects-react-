// import React, { useState } from 'react';

// const Formvalidation = () => {
//   const [formData, setFormData] = useState({user: '', pass: '', adhar: '', pan: '',contact: '',});

//   const validation = (e) => { e.preventDefault();
//     const { user, pass, adhar, pan, contact } = formData;

//     const userRegex = /^[A-Z]{1}[a-z]{8}$/;
//     const passRegex = /^[a-z]{8}$/;
//     const adharRegex = /^\d{12}$/;
//     const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
//     const contactRegex = /^[6-9]\d{9}$/;

//     if (!userRegex.test(user))  return alert("Username is required!");
//     if (!passRegex.test(pass)) return alert("Invalid password!");
//     if (!adharRegex.test(adhar)) return alert("Aadhar must be a 12-digit number!");
//     if (!panRegex.test(pan)) return alert("Invalid PAN format!");
//     if (!contactRegex.test(contact)) return alert("Invalid contact number!");
//     alert("Login Successful!");
//   };

//   return (
//     <>
//       <center>
//         <div className="border rounded bg-red-100 p-5 w-150 justify-center flex m-16">
//           <form htmlFor="/ConditionalRouter" className="w-150 justify-center flex flex-col" onSubmit={validation}>
//             <h1 className="text-5xl m-3 mb-5 font-bold">Login</h1>
//             <label htmlFor="user">Username :
//               <input className="w-100 border rounded p-2 bg-gray-100 m-3" type="text" id="user" required placeholder="Enter your username"
//                 value={formData.user} 
//                 onChange={(e) => setFormData({ ...formData, user: e.target.value })}
//               />
//             </label>
//              <label htmlFor="user">Passward :
//               <input className="w-100 border rounded p-2 bg-gray-100 m-3" type="text" id="user" required placeholder="Enter your username"
//                 value={formData.pass} 
//                 onChange={(e) => setFormData({ ...formData, user: e.target.value })}
//               />
//             </label> <label htmlFor="user">AdharCard :
//               <input className="w-100 border rounded p-2 bg-gray-100 m-3" type="text" id="user" required placeholder="Enter your username"
//                 value={formData.adhar} 
//                 onChange={(e) => setFormData({ ...formData, user: e.target.value })}
//               />
//             </label> <label htmlFor="user">PanCard :
//               <input className="w-100 border rounded p-2 bg-gray-100 m-3" type="text" id="user" required placeholder="Enter your username"
//                 value={formData.pan}
//                  onChange={(e) => setFormData({ ...formData, user: e.target.value })}
//               />
//             </label> <label htmlFor="user">Contact :
//               <input className="w-100 border rounded p-2 bg-gray-100 m-3" type="text" id="user" required placeholder="Enter your username"
//                 value={formData.contact}
//                  onChange={(e) => setFormData({ ...formData, user: e.target.value })}
//               />
//             </label>
//             <center>
//               <button className="bg-gray-100 border p-1 w-30 justify-center rounded mt-3" type="submit">Submit</button>
//             </center>
//           </form>
//         </div>
//       </center>
//     </>
//   );
// };

// export default Formvalidation;
