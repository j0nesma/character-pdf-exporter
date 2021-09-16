import * as dataRetriever from '../DataRetriever.js';
import * as foundryPlayer from '../FoundryPlayer.js';

function getSpell(player, spellLvl) {
    let items = dataRetriever.getDataFromPlayer(player, foundryPlayer.items);
    
    //Filter by type spell
    let spells =  items.filter((el) => {
        return el.type === "spell" && el.data.level === spellLvl;
    });
    
    //Sort by prepared spell incase player has too many spells on there sheet
    spells.sort((value) => { 
        return value.data.preparation.prepared ? -1 : 1;
    })

    return spells;
}

export function getPrepared(player, spellLvl, index) {
    return getSpell(player, spellLvl)[index]?.data.preparation.prepared;
}

export function getSpellName(player, spellLvl, index) {
    return getSpell(player, spellLvl)[index]?.name;
}

export function getNumberOfSpellsAtLevel(player, spellLvl) {
    return getSpell(player, spellLvl).length;
}