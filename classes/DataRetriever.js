export function getDataFromPlayer(player, path) {
    path.split(".").forEach(function (key) {
        player = player[key];
    });
    return player;
}