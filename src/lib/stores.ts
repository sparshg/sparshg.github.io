import { writable } from "svelte/store";

export const selected = writable(9999);
export const text = writable('echo Hello World');
