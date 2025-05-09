import { TeamMember, TeamMemberMembershipState, TeamMemberRole } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum TeamMemberProperty {
    id = "id",
    role = "role",
    membership = "membership",
}

export const TeamMemberProperties = defineProperties<typeof TeamMemberProperty, TeamMember>({
    id: (i) => i?.id,
    role: (i) => Object.entries(TeamMemberRole).find(([, x]) => x === i?.role)?.[0],
    membership: (i) => TeamMemberMembershipState[i?.membershipState!]
})