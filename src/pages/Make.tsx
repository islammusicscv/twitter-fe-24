import {SyntheticEvent, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

const Make = () => {
    const baseURL = "http://localhost:3000/tweets";

    const [content, setContent] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const data = {
            content
        }
        const res = await axios.post(baseURL, data);
        if (res.status === 201) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to="/"/>;
    }

    return (
        <>
            <form onSubmit={submit}>
                <input type="text" name="content" onChange={(e) => setContent(e.target.value)}/>
                <input type="submit" value="Objavi"/>
            </form>
        </>
    );
}
export default Make;