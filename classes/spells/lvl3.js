import { formTypes } from '../Form.js';
import { getSpellName, getNumberOfSpellsAtLevel, getPrepared } from './spellUtil.js';
import * as foundryPlayer from '../FoundryPlayer.js';

const maxSpells = 13;
const spellLvl = 3;

const spellSlots = [
    {
        id:"spell slots",
        pdfId: "SlotsTotal 21",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.spells.lvl3.max
    },
    {
        id:"spell slots remaining",
        pdfId: "SlotsRemaining 21",
        type: formTypes.TEXT,
        calculateValue: () => { return ""}
    }
];

const prepared = [
    {
        id: "lvl3 spell 1 prepared",
        pdfId: "Check Box 315",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 0) }
    },
    {
        id: "lvl3 spell 2 prepared",
        pdfId: "Check Box 314",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 1) }
    },
    {
        id: "lvl3 spell 3 prepared",
        pdfId: "Check Box 3031",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 2) }
    },
    {
        id: "lvl3 spell 4 prepared",
        pdfId: "Check Box 3032",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 3) }
    },
    {
        id: "lvl3 spell 5 prepared",
        pdfId: "Check Box 3033",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 4) }
    },
    {
        id: "lvl3 spell 6 prepared",
        pdfId: "Check Box 3034",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 5) }
    },
    {
        id: "lvl3 spell 7 prepared",
        pdfId: "Check Box 3035",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 6) }
    },
    {
        id: "lvl3 spell 8 prepared",
        pdfId: "Check Box 3036",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 7) }
    },
    {
        id: "lvl3 spell 9 prepared",
        pdfId: "Check Box 3037",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 8) }
    },
    {
        id: "lvl3 spell 10 prepared",
        pdfId: "Check Box 3038",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 9) }
    },
    {
        id: "lvl3 spell 11 prepared",
        pdfId: "Check Box 3039",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 10) }
    },
    {
        id: "lvl3 spell 12 prepared",
        pdfId: "Check Box 3040",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 11) }
    },
    {
        id: "lvl3 spell 13 prepared",
        pdfId: "Check Box 3041",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 12) }
    }
];

const spells = [
    {
        id:"spell 1",
        pdfId: "Spells 1048",
        type: formTypes.TEXT,
        calculateValue: (player) => { 
            if(getNumberOfSpellsAtLevel(player, spellLvl) > maxSpells) {
                console.warn("WARNING! - Number of LVL3 spells on character exceeds spells known");
            }
            return getSpellName(player, spellLvl,  0) 
        }
    },
    {
        id:"spell 2",
        pdfId: "Spells 1047",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  1)   }
    },
    {
        id:"spell 3",
        pdfId: "Spells 1049",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  2)   }
    },
    {
        id:"spell 4",
        pdfId: "Spells 1050",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  3)   }
    },
    {
        id:"spell 5",
        pdfId: "Spells 1051",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  4)   }
    },
    {
        id:"spell 6",
        pdfId: "Spells 1052",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  5)   }
    },
    {
        id:"spell 7",
        pdfId: "Spells 1053",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  6)   }
    },
    {
        id:"spell 8",
        pdfId: "Spells 1054",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  7)   }
    },
    {
        id:"spell 9",
        pdfId: "Spells 1055",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  8)   }
    },
    {
        id:"spell 10",
        pdfId: "Spells 1056",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  9)   }
    },
    {
        id:"spell 11",
        pdfId: "Spells 1057",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  10)   }
    },
    {
        id:"spell 12",
        pdfId: "Spells 1058",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  11)   }
    },
    {
        id:"spell 13",
        pdfId: "Spells 1059",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  12)   }
    }
];

export default spells.concat(prepared, spellSlots);