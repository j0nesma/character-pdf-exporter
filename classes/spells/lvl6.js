import { formTypes } from '../Form.js';
import { getSpellName, getNumberOfSpellsAtLevel, getPrepared } from './spellUtil.js';
import * as foundryPlayer from '../FoundryPlayer.js';

const maxSpells = 9;
const spellLvl = 6;
const spellSlots = [
    {
        id: "Spell Slot",
        pdfId: "SlotsTotal 24",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.spells.lvl6.max
    },
    {
        id: "Spell Slot Remaining",
        pdfId: "SlotsRemaining 24",
        type: formTypes.TEXT,
        calculateValue: () => { return "" }
    }
];

const prepared = [
    {
        id: "lvl6 spell 1 prepared",
        pdfId: "Check Box 321",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 0) }
    },
    {
        id: "lvl6 spell 2 prepared",
        pdfId: "Check Box 320",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 1) }
    },
    {
        id: "lvl6 spell 3 prepared",
        pdfId: "Check Box 3060",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 2) }
    },
    {
        id: "lvl6 spell 4 prepared",
        pdfId: "Check Box 3061",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 3) }
    },
    {
        id: "lvl6 spell 5 prepared",
        pdfId: "Check Box 3062",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 4) }
    },
    {
        id: "lvl6 spell 6 prepared",
        pdfId: "Check Box 3063",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 5) }
    },
    {
        id: "lvl6 spell 7 prepared",
        pdfId: "Check Box 3064",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 6) }
    },
    {
        id: "lvl6 spell 8 prepared",
        pdfId: "Check Box 3065",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 7) }
    },
    {
        id: "lvl6 spell 9 prepared",
        pdfId: "Check Box 3066",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 8) }
    }
];

const spells = [
    {
        id: "Spell 1",
        pdfId: "Spells 1083",
        type: formTypes.TEXT,
        calculateValue: (player) => { 
            if(getNumberOfSpellsAtLevel(player, spellLvl) > maxSpells) {
                console.warn("WARNING! - Number of LVL6 spells on character exceeds spells known");
            }
            return getSpellName(player, spellLvl,  0);
        }
    },
    {
        id: "Spell 2",
        pdfId: "Spells 1082",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  1)   }
    },
    {
        id: "Spell 3",
        pdfId: "Spells 1084",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  2)   }
    },
    {
        id: "Spell 4",
        pdfId: "Spells 1085",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  3)   }
    },
    {
        id: "Spell 5",
        pdfId: "Spells 1086",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  4)   }
    },
    {
        id: "Spell 6",
        pdfId: "Spells 1087",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  5)   }
    },
    {
        id: "Spell 7",
        pdfId: "Spells 1088",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  6)   }
    },
    {
        id: "Spell 8",
        pdfId: "Spells 1089",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  7)   }
    },
    {
        id: "Spell 9",
        pdfId: "Spells 1090",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  8)   }
    }

];

export default spells.concat(prepared, spellSlots)