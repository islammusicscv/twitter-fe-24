import axios from "axios";
import {useEffect, useState} from "react";

const User = () => {
    const baseURL = "http://localhost:3000/users";
    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        const res = await axios.get(baseURL);
        if (res.status === 200) {
            setUsers(res.data);
        }
    }
    useEffect(() => {
        loadUsers();
    }, []);

    if ((users) && (users.length > 0)) {
        return (
            <>
                {
                    users.map((user: any) => {
                        console.log(user);
                        return (
                            <div>
                                <h1>{user.first_name} {user.last_name}</h1>
                                <h2>{user.email}</h2>
                            </div>
                        );
                    })
                }
            </>
        );
    } else {
        return (
            <h1>Ni uporabnikov</h1>
        );
    }
}
export default User;