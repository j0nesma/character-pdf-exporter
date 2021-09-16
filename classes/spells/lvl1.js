import { formTypes } from '../Form.js';
import { getSpellName, getNumberOfSpellsAtLevel, getPrepared } from './spellUtil.js';
import * as foundryPlayer from '../FoundryPlayer.js';

const spellLvl = 1;
const maxSpells = 12;
const spellSlots = [
    {
        id: "spell slots",
        pdfId: "SlotsTotal 19",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.spells.lvl1.max
    },
    {
        id: "remaining spell slots",
        pdfId: "SlotsRemaining 19",
        type: formTypes.TEXT,
        calculateValue: () => { return "" }
    }
];

const prepared = [
    {
        id: "lvl1 spell 1 prepared",
        pdfId: "lvl1 spell 1 prepared",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 0) }
    },
    {
        id: "spell 1 prepared",
        pdfId: "Check Box 251",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 1) }
    },
    {
        id: "spell 2 prepared",
        pdfId: "Check Box 309",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 2) }
    },
    {
        id: "spell 3 prepared",
        pdfId: "Check Box 3010",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 3) }
    },
    {
        id: "spell 4 prepared",
        pdfId: "Check Box 3011",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 4) }
    },
    {
        id: "spell 5 prepared",
        pdfId: "Check Box 3012",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 5) }
    },
    {
        id: "spell 6 prepared",
        pdfId: "Check Box 3013",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 6) }
    },
    {
        id: "spell 7 prepared",
        pdfId: "Check Box 3014",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 7) }
    },
    {
        id: "spell 8 prepared",
        pdfId: "Check Box 3015",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 8) }
    },
    {
        id: "spell 9 prepared",
        pdfId: "Check Box 3016",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 9) }
    },
    {
        id: "spell 10 prepared",
        pdfId: "Check Box 3017",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 10) }
    },
    {
        id: "spell 11 prepared",
        pdfId: "Check Box 3018",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 11) }
    },
    {
        id: "spell 12 prepared",
        pdfId: "Check Box 3019",
        type: formTypes.CHECKBOX,
        calculateValue: (player) => { return getPrepared(player, spellLvl, 12) }
    }
]
const spells = [
    {
        id: "Lvl Spell 1",
        pdfId: "Lvl Spell 1",
        type: formTypes.TEXT,
        alignLeft: true,
        calculateValue: (player) => { 
            if(getNumberOfSpellsAtLevel(player, spellLvl) > maxSpells) {
                console.warn("WARNING! - Number of LVL1 spells on character exceeds spells known");
            }
            return getSpellName(player, spellLvl,  0) 
        }
    },
    {
        id: "spell 1",
        pdfId: "Spells 1015",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  1) }
    },
    {
        id: "spell 2",
        pdfId: "Spells 1023",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  2) }
    },
    {
        id: "spell 3",
        pdfId: "Spells 1024",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  3) }
    },
    {
        id: "spell 4",
        pdfId: "Spells 1025",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  4) }
    },
    {
        id: "spell 5",
        pdfId: "Spells 1026",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  5) }
    },
    {
        id: "spell 6",
        pdfId: "Spells 1027",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  6) }
    },
    {
        id: "spell 7",
        pdfId: "Spells 1028",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  7) }
    },
    {
        id: "spell 8",
        pdfId: "Spells 1029",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  8) }
    },
    {
        id: "spell 9",
        pdfId: "Spells 1030",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  9) }
    },
    {
        id: "spell 10",
        pdfId: "Spells 1031",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  10) }
    },
    {
        id: "spell 11",
        pdfId: "Spells 1032",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  11) }
    },
    {
        id: "spell 12",
        pdfId: "Spells 1033",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, spellLvl,  12) }
    },

]

export default spells.concat(spellSlots, prepared)