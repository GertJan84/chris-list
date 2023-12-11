import { writable } from 'svelte/store';

interface AuthUser {
    uid: string;
    userName: string;
    photo: string;
}

const authUser = writable<AuthUser | undefined>(undefined);

export { authUser }
