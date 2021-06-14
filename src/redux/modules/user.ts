// // make a function that creates typed actions for us with generic type extending string. payload extends any

// export function typedAction<T extends string>(type: T): { type: T };
// export function typedAction<T extends string, P extends any>(
//     type: T,
//     payload: P
//     ): { type: T; payload: P };
// export function typedAction(type: string, payload?: any) {
//     return { type, payload };
// }

// // Define UserState type and a couple action creators: login and logout.


import { typedAction } from '../helpers';

type UserState = {
    username: string | null;
};

const initialState: UserState = { username: null };


export const login = (username: string) => {
    return typedAction("user/LOGIN", username);
};


export const logout = (username: string) => {
    return typedAction("user/LOGOUT");
};


type UserAction = ReturnType<typeof login | typeof logout>;

// TSC Error: property'payload' doesnt exist on type{type: string}


export function userReducer(
    state = initialState,
    action: UserAction
): UserState {
    switch (action.type) {
        case "user/LOGIN":
            return { username: action.payload };
        case 'user/LOGOUT':
            return { username: null };
        default:
            return state;

            }
    }
