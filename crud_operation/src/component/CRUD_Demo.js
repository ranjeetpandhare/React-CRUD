import React, { useState } from 'react'

const CRUD_Demo = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    const onSubmit = (e) => {
        e.preventDefalut();
        

    }
    const isValidFrom = () => {

    }

    return (
        <div>
            <form onSubmit={e => onSubmit(e)}>
                FristName:<input type="text" name="fname" value={fname} onChange={e => { setFname(e.target.value) }} />
            LastName:<input type="text" name="lname" value={lname} onChange={e => { setLname(e.target.value) }} />
            Email:<input type="username" name="email" value={email} onChange={e => { setEmail(e.target.value) }} />
            MobileNumber:<input type="number" name="phone" value={phone} onChange={e => { setPhone(e.target.value) }} />
            State:<select id="dropdownstate" value={state} onChange={e => { setState(e.target.value) }}>
                    <select id="NA">select State</select>
                    <option id="maha">Maharashtra</option>
                    <option id="guj">Gujrat</option>
                    <option id="up">Up</option>
                    <option id="tamil">TamilNadu</option>
                    <option id="goa">Goa</option>
                </select>
            City:<select id="dropdowncity" value={city} onChange={e => { setCity(e.target.value) }}>
                    <select id="NA">select City</select>
                    <option id="1">1</option>
                    <option id="2">2</option>
                    <option id="3">3</option>
                    <option id="4">4</option>
                    <option id="5">5</option>
                </select>
                <input type="submit" />
            </form>

        </div>
    )
}

export default CRUD_Demo
