import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_USERS_QUERY } from "../utils/queries/FetchUsersQuery";
import { CREATE_USER_MUTATION } from "../utils/mutations/createUserMutation";

const UsersPage = () => {
    const {loading, data} = useQuery(FETCH_USERS_QUERY);
    const [handleCreateUser] = useMutation(CREATE_USER_MUTATION, {
        refetchQueries: [FETCH_USERS_QUERY],
    });

    const [usernameInput, setUsernameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    return (
        <div>
            <h1>Users</h1>

            <p>username</p>
            <input value={usernameInput} onChange={(event) => setUsernameInput(event.target.value)} />
            <p>email</p>
            <input value={emailInput} onChange={(event) => setEmailInput(event.target.value)} />
            <p>password</p>
            <input value={passwordInput} onChange={(event) => setPasswordInput(event.target.value)} />
            <br></br>
            <button
                onClick={async () => {
                    await handleCreateUser({
                        variables: {
                            username: usernameInput, 
                            email: emailInput,
                            password: passwordInput,
                        }
                    });
                }}
            >
                Sign Up
            </button>

            {
                loading ?
                <p>Loading...</p>
                :
                data?.users.map(user => {
                    return (
                        <div key={user._id}>
                            <h1>Username: {user.username}</h1>
                            <h1>Email: {user.email}</h1>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default UsersPage;