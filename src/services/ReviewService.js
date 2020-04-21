import {HEROKU_SERVER_URL} from "../common/constant";

export const post = (review, uid) =>
    fetch(`${HEROKU_SERVER_URL}/users/${uid}/post`, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json());

export const findAllReviews = (mid) =>
    fetch(`${HEROKU_SERVER_URL}/movies/${mid}/reviews`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json());

export const findReviewsByUser = (uid) =>
    fetch(`${HEROKU_SERVER_URL}/users/${uid}/reviews`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json()).catch(error => null);

export const deleteReview = (rid) =>
    fetch(`${HEROKU_SERVER_URL}/reviews/${rid}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json());