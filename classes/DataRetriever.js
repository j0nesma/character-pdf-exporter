export function getDataFromPlayer(player, path) {
    console.log("path = ", path);
    path.split(".").forEach(function (key) {
        player = player[key];
    });
    console.log("player = ", player);
    return player;
}