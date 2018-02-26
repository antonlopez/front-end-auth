import { RSAA } from 'redux-api-middleware';
export const CREATE_REQUEST = '@@create/CREATE_REQUEST';
export const CREATE_SUCCESS = '@@create/CREATE_SUCCESS';
export const CREATE_FAILURE = '@@create/CREATE_FAILURE';

export const create = (username, email,  password) => ({
    [RSAA]: {
        endpoint: '/api/users/',
        method: 'POST',
        body: JSON.stringify({username, email, password}),
        headers: { 'Content-Type': 'application/json' },
        types: [
            CREATE_REQUEST, CREATE_SUCCESS, CREATE_FAILURE
        ]
    }
})
