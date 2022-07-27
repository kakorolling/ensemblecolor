import { writable } from "svelte/store"

export let gameSequence = writable(0)
export let score = writable(0)