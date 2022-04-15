import { getDataFromPlayer } from "./DataRetriever.js";
import * as foundryPlayer from "./FoundryPlayer.js"

export function getClasses(player) {
    let items = getDataFromPlayer(player, foundryPlayer.items);
    return items.filter((el) => {return el.type === "class";});;
}