import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase'; // Ensure firebase is correctly configured
import './join.css';

function Join() {
    const initialState = {
        name: '',
        contactNumber: '',
        email: '',
        uid: '',
        dept: '',
        year: '',
        gitId: '',
        lnkdId: '',
    };

    const [userData, setUserData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setUserData((prevCreds) => ({
            ...prevCreds,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        try {
            const docRef = await addDoc(collection(db, "users"), userData);
            console.log("Document written with ID: ", docRef.id);
            setIsRegistered(true);
        } catch (e) {
            console.error("Error adding document: ", e);
        } finally {
            setIsLoading(false);
        }
    }

    function handleModalClose() {
        setUserData(initialState);
        setIsRegistered(false);
        setIsLoading(false);
    }

    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content custom">
                        <div className="modal-header" style={{borderColor:'#00000000'}}>
                            <h1 className="modal-title fs-5 head" id="staticBackdropLabel">
                                {isRegistered ? "Welcome to Sci-Fi Innovation Club!" : "Sci-Fi Innovation Club Membership Form"}
                            </h1>
                            <button type="button" className="btn-close custom" data-bs-dismiss="modal" aria-label="Close" onClick={handleModalClose}></button>
                        </div>
                        <div className="modal-body">
                        <div className='para2'>The Membership Form will be live at the end of Think-A-Thon Event</div>
                            {/* {isRegistered ? (
                                <div className="mt-3">
                                    <p>Thank you for registering! Join our WhatsApp group here:</p>
                                    <a href="https://chat.whatsapp.com/your-group-link" target="_blank" rel="noopener noreferrer">Join WhatsApp Group</a>
                                </div>
                            ) : (
                                <div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="input-group d-flex flex-column">
                                            <label className="label">Name</label>
                                            <input autoComplete="off"
                                                name="name"
                                                className="input"
                                                type="text"
                                                onChange={handleChange}
                                                value={userData.name}
                                                required
                                                placeholder="Name" />
                                        </div>

                                        <div className="input-group d-flex flex-column">
                                            <label className="label">UID</label>
                                            <input autoComplete="off"
                                                name="uid"
                                                className="input"
                                                type="text"
                                                onChange={handleChange}
                                                value={userData.uid}
                                                required
                                                placeholder="UID" />
                                        </div>

                                        <div className="input-group d-flex flex-column">
                                            <label className="label">Contact Number</label>
                                            <input autoComplete="off"
                                                name="contactNumber"
                                                className="input"
                                                type="number"
                                                onChange={handleChange}
                                                value={userData.contactNumber}
                                                required
                                                placeholder="Contact Number" />
                                        </div>

                                        <div className="input-group d-flex flex-column">
                                            <label className="label">Personal Email</label>
                                            <input autoComplete="off"
                                                name="email"
                                                className="input"
                                                type="email"
                                                onChange={handleChange}
                                                value={userData.email}
                                                required
                                                placeholder="Personal Email Id" />
                                        </div>

                                        <div className="input-group d-flex flex-column">
                                            <label className="label">Department-Branch</label>
                                            <input autoComplete="off"
                                                name="dept"
                                                className="input"
                                                type="text"
                                                onChange={handleChange}
                                                value={userData.dept}
                                                required
                                                placeholder="Department-Branch" />
                                        </div>

                                        <div className="input-group d-flex flex-column">
                                            <label className="label">Year</label>
                                            <select
                                                name="year"
                                                className="input"
                                                onChange={handleChange}
                                                value={userData.year}
                                                required
                                            >
                                                <option value="" disabled hidden>Choose Year</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>

                                        

                                        <div className="input-group d-flex flex-column">
                                            <label className="label">LinkedIn URL</label>
                                            <input autoComplete="off"
                                                name="lnkdId"
                                                className="input"
                                                type="text"
                                                onChange={handleChange}
                                                value={userData.lnkdId}
                                                placeholder="LinkedIn URL" />
                                        </div>

                                        <div className="input-group d-flex flex-column">
                                            <label className="label">GitHub ID</label>
                                            <input autoComplete="off"
                                                name="gitId"
                                                className="input"
                                                type="text"
                                                onChange={handleChange}
                                                value={userData.gitId}
                                                placeholder="GitHub ID" />
                                        </div>

                                        <button
                                            type="submit" className='animated-button mt-2'
                                            disabled={isLoading}
                                        >
                                            {isLoading ? 'Submitting...' : 'Submit'}
                                        </button>
                                    </form>
                                </div>
                            )} */}
                        </div>
                        <div className="modal-footer" style={{borderColor:'#00000000'}}>
                            <button type="button" className="animated-button" data-bs-dismiss="modal" onClick={handleModalClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Join;
