import { formTypes } from '../Form.js';
import { getSpellName, getNumberOfSpellsAtLevel } from './spellUtil.js';

const cantripLvl = 0;
const maxCantrips = 8;
export const cantrips = [
    {
        id: "Cantrip 1",
        pdfId: "Spells 1014",
        type: formTypes.TEXT,
        calculateValue: (player) => { 
            if(getNumberOfSpellsAtLevel(player, cantripLvl) > maxCantrips) {
                console.warn("Number of spells on character exceeds spells known");
            }
            return getSpellName(player, cantripLvl,  0) 
        }
    },
    {
        id: "Cantrip 2",
        pdfId: "Spells 1016",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, cantripLvl,  1) }
    },
    {
        id: "Cantrip 3",
        pdfId: "Spells 1017",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, cantripLvl,  2) }
    }
    ,
    {
        id: "Cantrip 4",
        pdfId: "Spells 1018",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, cantripLvl,  3) }
    },
    {
        id: "Cantrip 5",
        pdfId: "Spells 1019",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, cantripLvl,  4) }
    },
    {
        id: "Cantrip 6",
        pdfId: "Spells 1020",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, cantripLvl,  5) }
    },
    {
        id: "Cantrip 7",
        pdfId: "Spells 1021",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, cantripLvl,  6) }
    },
    {
        id: "Cantrip 8",
        pdfId: "Spells 1022",
        type: formTypes.TEXT,
        calculateValue: (player) => { return getSpellName(player, cantripLvl,  7) }
    }
]

export default {cantrips}