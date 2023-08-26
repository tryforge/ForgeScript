import { EventHandler } from "../../structures/EventHandler"

export default new EventHandler(
    "ready",
    function() {
        console.log(`Ready on client ${this.user.displayName}`)
    }
)