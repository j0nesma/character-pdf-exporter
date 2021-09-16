import { formTypes } from '../Form.js';
import { getSpellName, getNumberOfSpellsAtLevel, getPrepared } from './spellUtil.js';
import * as foundryPlayer from '../FoundryPlayer.js';

const maxSpells = 7;
const spellLvl = 8;

const spellSlots = [
    {
        id: "Spell Slot",
        pdfId: "SlotsTotal 26",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.spells.lvl8.max
    },
    {
        id: "Spell Slot Remaining",
        pdfId: "SlotsRemaining 26",
        type: formTypes.TEXT,
        calculateValue: () => { return "" }
    }
];

const prepared = [
    {
        id: "lvl8 spell 1 prepared",
        pdfId: "Check Box 325",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 0) }
    },
    {
        id: "lvl8 spell 2 prepared",
        pdfId: "Check Box 324",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 1) }
    },
    {
        id: "lvl8 spell 3 prepared",
        pdfId: "Check Box 3074",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 2) }
    },
    {
        id: "lvl8 spell 4 prepared",
        pdfId: "Check Box 3075",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 3) }
    },
    {
        id: "lvl8 spell 5 prepared",
        pdfId: "Check Box 3076",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 4) }
    },
    {
        id: "lvl8 spell 6 prepared",
        pdfId: "Check Box 3077",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 5) }
    },
    {
        id: "lvl8 spell 7 prepared",
        pdfId: "Check Box 3078",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 6) }
    }
];

const spells = [
    {
        id: "Spell 1",
        pdfId: "Spells 10101",
        type: formTypes.TEXT,
        calculateValue: (player) => {
            if(getNumberOfSpellsAtLevel(player, spellLvl) > maxSpells) {
                console.warn("WARNING! - Number of LVL8 spells on character exceeds spells known");
            }
             return getSpellName(player, spellLvl,  0)   
            }
    },
    {
        id: "Spell 2",
        pdfId: "Spells 10100",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  1)   }
    },
    {
        id: "Spell 3",
        pdfId: "Spells 10102",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  2)   }
    },
    {
        id: "Spell 4",
        pdfId: "Spells 10103",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  3)   }
    },
    {
        id: "Spell 5",
        pdfId: "Spells 10104",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  4)   }
    },
    {
        id: "Spell 6",
        pdfId: "Spells 10105",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  5)   }
    },
    {
        id: "Spell 7",
        pdfId: "Spells 10106",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  6)   }
    }
];

export default spells.concat(prepared, spellSlots);