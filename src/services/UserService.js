import {HEROKU_SERVER_URL} from "../common/constant";
import {report} from "npm/lib/utils/explain-eresolve";

export const logout = () =>
    fetch(`${HEROKU_SERVER_URL}/logout`, {
        method: 'POST',
        credentials: "include"
    })

// export const profile = () =>
//     fetch(`${HEROKU_SERVER_URL}/profile`, {
//         method: 'GET',
//         credentials: "include"
//     }).then(response => console.log(response.json())).catch(ErrorEvent => ErrorEvent);

export const profile = () => {


    return fetch(`${HEROKU_SERVER_URL}/profile`, {
        method: 'GET',
        credentials: "include"
    }).then(response => response.json()).catch(ErrorEvent => ErrorEvent);
}

export const findUserByUsername = (username) =>
    fetch(`${HEROKU_SERVER_URL}/profile/${username}`, {
        method: 'GET',
        credentials: "include"
    }).then(response => response.json()).catch(ErrorEvent => ErrorEvent);

export const register = (user) =>
    fetch(`${HEROKU_SERVER_URL}/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json()).catch(ErrorEvent => ErrorEvent);



export const update = (user) =>
    fetch(`${HEROKU_SERVER_URL}/update`, {
        method: 'PUT',
        body: JSON.stringify(console.log(user)),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json());


export const login = (user) =>
    fetch(`${HEROKU_SERVER_URL}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json()).catch(ErrorEvent => ErrorEvent);

export const findUserByReview = (mid, rid) =>
    fetch(`${HEROKU_SERVER_URL}/movies/${mid}/reviews/${rid}/user`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json());

