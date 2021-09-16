import { formTypes } from '../Form.js';
import { getSpellName, getNumberOfSpellsAtLevel, getPrepared } from './spellUtil.js';
import * as foundryPlayer from '../FoundryPlayer.js';

const maxSpells = 9;
const spellLvl = 5;

const spellSlots = [
    {
        id: "Spell Slots",
        pdfId: "SlotsTotal 23",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.spells.lvl5.max
    },
    {
        id: "Spell Slots Remaining",
        pdfId: "SlotsRemaining 23",
        type: formTypes.TEXT,
        calculateValue: () => { return "" }
    }
];
const prepared = [
    {
        id: "spell 1 prepared",
        pdfId: "Check Box 319",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 0) }
    },
    {
        id: "spell 2 prepared",
        pdfId: "Check Box 318",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 1) }
    },
    {
        id: "spell 3 prepared",
        pdfId: "Check Box 3053",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 2) }
    },
    {
        id: "spell 4 prepared",
        pdfId: "Check Box 3054",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 3) }
    },
    {
        id: "spell 5 prepared",
        pdfId: "Check Box 3055",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 4) }
    },
    {
        id: "spell 6 prepared",
        pdfId: "Check Box 3056",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 5) }
    },
    {
        id: "spell 7 prepared",
        pdfId: "Check Box 3057",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 6) }
    },
    {
        id: "spell 8 prepared",
        pdfId: "Check Box 3058",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 7) }
    },
    {
        id: "spell 9 prepared",
        pdfId: "Check Box 3059",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 8) }
    }
];
const spells = [
    {
        id: "Spell 1",
        pdfId: "Spells 1074",
        type: formTypes.TEXT,
        calculateValue: (player) => { 
            if(getNumberOfSpellsAtLevel(player, spellLvl) > maxSpells) {
                console.warn("WARNING! - Number of LVL5 spells on character exceeds spells known");
            }
            return getSpellName(player, spellLvl,  0)   
        }
    },
    {
        id: "Spell 2",
        pdfId: "Spells 1073",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  1)   }
    },
    {
        id: "Spell 3",
        pdfId: "Spells 1075",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  2)   }
    },
    {
        id: "Spell 4",
        pdfId: "Spells 1076",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  3)   }
    },
    {
        id: "Spell 5",
        pdfId: "Spells 1077",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  4)   }
    },
    {
        id: "Spell 6",
        pdfId: "Spells 1078",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  5)   }
    },
    {
        id: "Spell 9",
        pdfId: "Spells 1079",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  6)   }
    },
    {
        id: "Spell 8",
        pdfId: "Spells 1080",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  7)   }
    },
    {
        id: "Spell 9",
        pdfId: "Spells 1081",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  8)   }
    }
];

export default spells.concat(prepared, spellSlots);