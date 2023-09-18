import { Return } from "../structures";

export default function(t: Return) {
    return t.value === "true" || t.value === true
}