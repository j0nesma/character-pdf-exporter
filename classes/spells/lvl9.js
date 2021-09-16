import { formTypes } from '../Form.js';
import { getSpellName, getNumberOfSpellsAtLevel, getPrepared } from './spellUtil.js';
import * as foundryPlayer from '../FoundryPlayer.js';

const maxSpells = 7;
const spellLvl = 9;
const spellSlots = [
    {
        id: "spell slots",
        pdfId: "SlotsTotal 27",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.spells.lvl9.max
    },
    {
        id: "spell slots remaining",
        pdfId: "SlotsRemaining 27",
        type: formTypes.TEXT,
        calculateValue: () => { return "" }
    }
];

const prepared = [
    {
        id: "spell 1 prepared",
        pdfId: "Check Box 327",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 0) }
    },
    {
        id: "spell 2 prepared",
        pdfId: "Check Box 326",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 1) }
    },
    {
        id: "spell 3 prepared",
        pdfId: "Check Box 3079",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 2) }
    },
    {
        id: "spell 4 prepared",
        pdfId: "Check Box 3080",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 3) }
    },
    {
        id: "spell 5 prepared",
        pdfId: "Check Box 3081",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 4) }
    },
    {
        id: "spell 6 prepared",
        pdfId: "Check Box 3082",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 5) }
    },
    {
        id: "spell 7 prepared",
        pdfId: "Check Box 3083",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 6) }
    }
];

const spells = [
    {
        id: "Spell 1",
        pdfId: "Spells 10108",
        type: formTypes.TEXT,
        calculateValue: (player) => {
            if(getNumberOfSpellsAtLevel(player, spellLvl) > maxSpells) {
                console.warn("WARNING! - Number of LVL9 spells on character exceeds spells known");
            }
             return getSpellName(player, spellLvl,  0)   
            }
    },
    {
        id: "Spell 2",
        pdfId: "Spells 10107",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  1)   }
    },
    {
        id: "Spell 3",
        pdfId: "Spells 10109",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  2)   }
    },
    {
        id: "Spell 4",
        pdfId: "Spells 101010",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  3)   }
    },
    {
        id: "Spell 5",
        pdfId: "Spells 101011",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  4)   }
    },
    {
        id: "Spell 6",
        pdfId: "Spells 101012",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  5)   }
    },
    {
        id: "Spell 7",
        pdfId: "Spells 101013",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  6)   }
    }
];

export default spells.concat(spellSlots, prepared);
