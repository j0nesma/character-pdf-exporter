import { formTypes } from '../Form.js';
import { getSpellName, getNumberOfSpellsAtLevel, getPrepared } from './spellUtil.js';
import * as foundryPlayer from '../FoundryPlayer.js';

const maxSpells = 12;
const spellLvl = 2;

const prepared = [
    {
        id: "lvl2 spell 1 prepared",
        pdfId: "Check Box 313",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 0) }
    },
    {
        id: "lvl2 spell 2 prepared",
        pdfId: "Check Box 310",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 1) }
    },
    {
        id: "lvl2 spell 3 prepared",
        pdfId: "Check Box 3020",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 2) }
    },
    {
        id: "lvl2 spell 4 prepared",
        pdfId: "Check Box 3021",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 3) }
    },
    {
        id: "lvl2 spell 5 prepared",
        pdfId: "Check Box 3022",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 4) }
    },
    {
        id: "lvl2 spell 6 prepared",
        pdfId: "Check Box 3023",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 5) }
    },
    {
        id: "lvl2 spell 7 prepared",
        pdfId: "Check Box 3024",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 6) }
    },
    {
        id: "lvl2 spell 8 prepared",
        pdfId: "Check Box 3025",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 7) }
    },
    {
        id: "lvl2 spell 9 prepared",
        pdfId: "Check Box 3026",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 8) }
    },
    {
        id: "lvl2 spell 10 prepared",
        pdfId: "Check Box 3027",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 9) }
    },
    {
        id: "lvl2 spell 11 prepared",
        pdfId: "Check Box 3028",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 10) }
    },
    {
        id: "lvl2 spell 12 prepared",
        pdfId: "Check Box 3029",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 11) }
    },
    {
        id: "lvl2 spell 13 prepared",
        pdfId: "Check Box 3030",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 12) }
    }];

const spellSlots = [
    {
        id: "spell slots",
        pdfId: "SlotsTotal 20",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.spells.lvl3.max
    },
    {
        id: "remaining spell slots",
        pdfId: "SlotsRemaining 20",
        type: formTypes.TEXT,
        calculateValue: () => { return "" }
    }];

const spells = [
    {
        id: "spell 1",
        pdfId: "Spells 1046",
        type: formTypes.TEXT,
        calculateValue: (player) => {  
            if(getNumberOfSpellsAtLevel(player, spellLvl) > maxSpells) {
                console.warn("WARNING! - Number of LVL2 spells on character exceeds spells known");
            }
            return getSpellName(player, spellLvl,  0)  
        }
    },
    {
        id: "spell 2",
        pdfId: "Spells 1034",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  1)  }
    },
    {
        id: "spell 3",
        pdfId: "Spells 1035",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  2)   }
    },
    {
        id: "spell 4",
        pdfId: "Spells 1036",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  3)   }
    },
    {
        id: "spell 5",
        pdfId: "Spells 1037",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  4)   }
    },
    {
        id: "spell 6",
        pdfId: "Spells 1038",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  5)   }
    },
    {
        id: "spell 7",
        pdfId: "Spells 1039",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  6)   }
    },
    {
        id: "spell 8",
        pdfId: "Spells 1040",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  7)   }
    },
    {
        id: "spell 9",
        pdfId: "Spells 1041",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  8)   }
    },
    {
        id: "spell 10",
        pdfId: "Spells 1042",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  9)   }
    },
    {
        id: "spell 11",
        pdfId: "Spells 1043",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  10)   }
    },
    {
        id: "spell 12",
        pdfId: "Spells 1044",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  11)   }
    },
    {
        id: "spell 13",
        pdfId: "Spells 1045",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  12)   }
    }
];

export default spells.concat(spellSlots, prepared);