import {SyntheticEvent, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const baseUrl = 'http://localhost:3000/auth/register';

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const data = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "pass": password
        }

        const res = await axios.post(baseUrl, data);
        if (res.status === 201) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to="/"/>;
    }

    return (
        <>
            <form onSubmit={submit} className="w-100">
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First name</label>
                    <input type="text" className="form-control" id="firstName"
                           onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="lastName"
                           onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           onChange={(e) => setEmail(e.target.value)}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
export default Register;