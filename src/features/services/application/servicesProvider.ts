import { getContext, setContext } from "svelte"
import { supabaseClient } from "../infrastructure/supabaseClient"

const servicesProviderKey = Symbol()
const services = {
    supabase: supabaseClient
}

export function initializeContext() {
    setContext(servicesProviderKey, services)
}

export function getServices() {
    return getContext<typeof services>(servicesProviderKey)
}