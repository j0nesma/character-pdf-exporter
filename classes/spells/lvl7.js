import { formTypes } from '../Form.js';
import { getSpellName, getNumberOfSpellsAtLevel, getPrepared } from './spellUtil.js';
import * as foundryPlayer from '../FoundryPlayer.js';

const maxSpells = 9;
const spellLvl = 7;

const spellSlots = [
    {
        id: "Spell Slot",
        pdfId: "SlotsTotal 25",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.spells.lvl7.max
    },
    {
        id: "Spell Slot Remaining",
        pdfId: "SlotsRemaining 25",
        type: formTypes.TEXT,
        calculateValue: () => { return "" }
    }
];

const prepared = [
    {
        id: "lvl7 spell 1 prepared",
        pdfId: "Check Box 323",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 0) }
    },
    {
        id: "lvl7 spell 2 prepared",
        pdfId: "Check Box 322",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 1) }
    },
    {
        id: "lvl7 spell 3 prepared",
        pdfId: "Check Box 3067",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 2) }
    },
    {
        id: "lvl7 spell 4 prepared",
        pdfId: "Check Box 3068",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 3) }
    },
    {
        id: "lvl7 spell 5 prepared",
        pdfId: "Check Box 3069",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 4) }
    },
    {
        id: "lvl7 spell 6 prepared",
        pdfId: "Check Box 3070",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 5) }
    },
    {
        id: "lvl7 spell 7 prepared",
        pdfId: "Check Box 3071",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 6) }
    },
    {
        id: "lvl7 spell 8 prepared",
        pdfId: "Check Box 3072",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 7) }
    },
    {
        id: "lvl7 spell 9 prepared",
        pdfId: "Check Box 3073",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 8) }
    },
];

const spells = [ 
    {
        id: "Spell 1",
        pdfId: "Spells 1092",
        type: formTypes.TEXT,
        calculateValue: (player) => { 
            if(getNumberOfSpellsAtLevel(player, spellLvl) > maxSpells) {
                console.warn("WARNING! - Number of LVL7 spells on character exceeds spells known");
            }
            return getSpellName(player, spellLvl,  0)   
        }
    },
    {
        id: "Spell 2",
        pdfId: "Spells 1091",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  1)   }
    },
    {
        id: "Spell 3",
        pdfId: "Spells 1093",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  2)   }
    },
    {
        id: "Spell 4",
        pdfId: "Spells 1094",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  3)   }
    },
    {
        id: "Spell 5",
        pdfId: "Spells 1095",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  4)   }
    },
    {
        id: "Spell 6",
        pdfId: "Spells 1096",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  5)   }
    },
    {
        id: "Spell 7",
        pdfId: "Spells 1097",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  6)   }
    },
    {
        id: "Spell 8",
        pdfId: "Spells 1098",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  7)   }
    },
    {
        id: "Spell 9",
        pdfId: "Spells 1099",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  8)   }
    }
];

export default spells.concat(prepared, spellSlots);