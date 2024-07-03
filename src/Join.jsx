import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase'; // Ensure firebase is correctly configured
import './join.css'
function Join() {

    const initialState = {
        name: '',
        contactNumber: '',
        email: '',
        uid: '',
        dept: '',
        year: '',
        domain: '',
        gitId: '',
        lnkdId: '',
        sec: ''
    };

    const [userData, setUserData] = useState(initialState);

    function handleChange(event) {
        const { name, value } = event.target;
        setUserData((prevCreds) => ({
            ...prevCreds,
            [name]: value
        }));
    }


    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "users"), userData);
            console.log("Document written with ID: ", docRef.id);
            setUserData(initialState);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        
    }
    return <>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content custom">
                    <div className="modal-header" style={{borderColor:'#00000000'}}>
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Sci-Fi Innovation Club Memebership Form</h1>
                        <button type="button" className="btn-close custom" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div> 
                    <div className="modal-body">
                        <div>
                            <div>
                                <form onSubmit={handleSubmit}>

                                    <div class="input-group d-flex flex-column">
                                        <label class="label">Name</label>
                                        <input autocomplete="off"
                                            name="name"
                                            class="input"
                                            type="text"
                                            onChange={handleChange}
                                            value={userData.name}
                                            required
                                            placeholder="Name" />
                                        <div></div></div>




                                    <div class="input-group d-flex flex-column">
                                        <label class="label">UID</label>
                                        <input autocomplete="off"
                                            name="uid"
                                            class="input"
                                            type="text"
                                            onChange={handleChange}
                                            value={userData.uid}
                                            required
                                            placeholder="UID" />
                                        <div></div></div>

                                    <div class="input-group d-flex flex-column">
                                        <label class="label">Contact Number</label>
                                        <input autocomplete="off"
                                            name="contactNumber"
                                            class="input"
                                            type="number"
                                            onChange={handleChange}
                                            value={userData.contactNumber}
                                            required
                                            placeholder="Contact Number" />
                                        <div></div></div>

                                    <div class="input-group d-flex flex-column">
                                        <label class="label">Personal Email</label>
                                        <input autocomplete="off"
                                            name="email"
                                            class="input"
                                            type="email"
                                            onChange={handleChange}
                                            value={userData.email}
                                            required
                                            placeholder="Personal Email Id" />
                                        <div></div></div>

                                    <div class="input-group d-flex flex-column">
                                        <label class="label">Department-Branch</label>
                                        <input autocomplete="off"
                                            name="dept"
                                            class="input"
                                            type="text"
                                            onChange={handleChange}
                                            value={userData.dept}
                                            required
                                            placeholder="Department-Branch" />
                                        <div></div></div>

                                    <div class="input-group d-flex flex-column">
                                        <label class="label">Domain</label>
                                        <select
                                            name="domain"
                                            class="input"
                                            
                                            onChange={handleChange}
                                            value={userData.domain}
                                            required
                                        >
                                            <option value="" disabled hidden>Choose Domain</option>
                                            <option value="Technical">Technical</option>
                                            <option value="Creative & Media">Creative & Media</option>
                                            <option value="Event Management">Event Management</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Marketing and Promotion">Marketing and Promotion</option>
                                            <option value="Designing">Designing</option>
                                        </select>
                                        <div></div></div>

                                        <div class="input-group d-flex flex-column">
                                        <label class="label">Year</label>
                                        <select
                                            name="year"
                                            class="input"
                                            
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
                                        <div></div></div>

                                        <div class="input-group d-flex flex-column">
                                        <label class="label">Section</label>
                                        <input autocomplete="off"
                                            name="sec"
                                            class="input"
                                            type="text"
                                            onChange={handleChange}
                                            value={userData.sec}
                                            required
                                            placeholder="Section" />
                                        <div></div></div>

                                        <div class="input-group d-flex flex-column">
                                        <label class="label">LinkedIn URL</label>
                                        <input autocomplete="off"
                                            name="lnkdId"
                                            class="input"
                                            type="text"
                                            onChange={handleChange}
                                            value={userData.lnkdId}
                                            required
                                            placeholder="LinkedIn URL" />
                                        <div></div></div>

                                        <div class="input-group d-flex flex-column">
                                        <label class="label">GitHub ID</label>
                                        <input autocomplete="off"
                                            name="gitID"
                                            class="input"
                                            type="text"
                                            onChange={handleChange}
                                            value={userData.gitID}
                                            required
                                            placeholder="GitHub ID" />
                                        <div></div></div>
                                    
                    
                                    <button
                                        type="submit" className='animated-button mt-2'
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>


                    </div>
                    <div className="modal-footer " style={{borderColor:'#00000000'}}>
                        <button type="button" className="animated-button" data-bs-dismiss="modal">Close</button>
            
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Join;