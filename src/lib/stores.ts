import { writable } from "svelte/store";

export const selected = writable('');
export const text = writable('echo Hello World');