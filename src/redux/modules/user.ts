// make a function that creates typed actions for us with generic type extending string. payload extends any

export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
    type: T,
    payload: P
    ): { type: T; payload: P };
export function typedAction(type: string, payload?: any) {
    return { type, payload };
}

// Define UserState type and a couple action creators: login and logout.

type UserState = {
    username: string | null;
};

const initialState: UserState = { username: null };


const login = (username: string) => ({
    type: 'user/LOGIN',
    payload: username
});

const logout = () => ({
    type: 'user/LOGOUT'
})

type UserAction = ReturnType<typeof login | typeof logout>;

// TSC Error: property'payload' doesnt exist on type{type: string}


export function userReducer(
    state = initialState,
    action: UserAction
): UserState {
    switch (action.type) {
        case 'user/LOGIN':
            return { username: action.payload };
        case 'user/LOGOUT':
            return { username: null };
        default:
            return state;

            }
    }
