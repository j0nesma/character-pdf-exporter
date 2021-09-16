import { formTypes } from '../Form.js';
import { getSpellName, getNumberOfSpellsAtLevel, getPrepared } from './spellUtil.js';
import * as foundryPlayer from '../FoundryPlayer.js';

const maxSpells = 13;
const spellLvl = 4;

const spellSlots = [
    {
        id: "Spell Slots",
        pdfId: "SlotsTotal 22",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.spells.lvl4.max
    },
    {
        id: "Spell Slots Remaining",
        pdfId: "SlotsRemaining 22",
        type: formTypes.TEXT,
        calculateValue: () => { return "" }
    }
];
const prepared =[
    {
        id: "lvl4 spell 1 prepared",
        pdfId: "Check Box 317",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 0) }
    },
    {
        id: "lvl4 spell 2 prepared",
        pdfId: "Check Box 316",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 1) }
    },
    {
        id: "lvl4 spell 3 prepared",
        pdfId: "Check Box 3042",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 2) }
    },
    {
        id: "lvl4 spell 4 prepared",
        pdfId: "Check Box 3043",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 3) }
    },
    {
        id: "lvl4 spell 5 prepared",
        pdfId: "Check Box 3044",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 4) }
    },
    {
        id: "lvl4 spell 6 prepared",
        pdfId: "Check Box 3045",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 5) }
    },
    {
        id: "lvl4 spell 7 prepared",
        pdfId: "Check Box 3046",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 6) }
    },
    {
        id: "lvl4 spell 8 prepared",
        pdfId: "Check Box 3047",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 7) }
    },
    {
        id: "lvl4 spell 9 prepared",
        pdfId: "Check Box 3048",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 8) }
    },
    {
        id: "lvl4 spell 10 prepared",
        pdfId: "Check Box 3049",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 9) }
    },
    {
        id: "lvl4 spell 11 prepared",
        pdfId: "Check Box 3050",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 10) }
    },
    {
        id: "lvl4 spell 12 prepared",
        pdfId: "Check Box 3051",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 11) }
    },
    {
        id: "lvl4 spell 13 prepared",
        pdfId: "Check Box 3052",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 12) }
    }
];
const spells = [
    {
        id: "Spell 1",
        pdfId: "Spells 1061",
        type: formTypes.TEXT,
        calculateValue: (player) => { 
            if(getNumberOfSpellsAtLevel(player, spellLvl) > maxSpells) {
                console.warn("WARNING! - Number of LVL4 spells on character exceeds spells known");
            }
            return getSpellName(player, spellLvl,  0)   
        }
    },
    {
        id: "Spell 2",
        pdfId: "Spells 1060",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  1)   }
    },
    {
        id: "Spell 3",
        pdfId: "Spells 1062",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  2)   }
    },
    {
        id: "Spell 4",
        pdfId: "Spells 1063",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  3)   }
    },
    {
        id: "Spell 5",
        pdfId: "Spells 1064",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  4)   }
    },
    {
        id: "Spell 6",
        pdfId: "Spells 1065",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  5)   }
    },
    {
        id: "Spell 7",
        pdfId: "Spells 1066",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  6)   }
    },
    {
        id: "Spell 8",
        pdfId: "Spells 1067",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  7)   }
    },
    {
        id: "Spell 9",
        pdfId: "Spells 1068",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  8)   }
    },
    {
        id: "Spell 10",
        pdfId: "Spells 1069",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  9)   }
    },
    {
        id: "Spell 11",
        pdfId: "Spells 1070",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  10)   }
    },
    {
        id: "Spell 12",
        pdfId: "Spells 1071",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  11)   }
    },
    {
        id: "Spell 13",
        pdfId: "Spells 1072",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  12)   }
    }
];

export default spells.concat(prepared, spellSlots);