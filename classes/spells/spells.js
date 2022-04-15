import {cantrips} from './cantrip.js';
import * as dataRetriever from '../DataRetriever.js';
import * as foundryPlayer from '../FoundryPlayer.js';
import { formTypes } from '../Form.js';
import * as fiveEHelper from '../5eHelper.js'
import { ATTRIBUTES } from '../constants/attributes.js';
import { getClasses } from '../commonUtil.js';

import lvl1 from './lvl1.js';
import lvl2 from './lvl2.js';
import lvl3 from './lvl3.js';
import lvl4 from './lvl4.js';
import lvl5 from './lvl5.js';
import lvl6 from './lvl6.js';
import lvl7 from './lvl7.js';
import lvl8 from './lvl8.js';
import lvl9 from './lvl9.js';

const spells = [
    {
        id: "Spellcasting Class",
        pdfId: "Spellcasting Class 2",
        type: formTypes.TEXT,
        calculateValue: (player) => {
            let text = "";
            let classes = getClasses(player);
            classes.forEach((e) => {
                console.log("e= ", e);                
                //TODO check if this is correct
                if (e.spellcasting) {
                    if(text.length > 0 ) {
                        text += " ,"
                    }
                    
                    text += e.name
                }
                
            })
            return text
        }
    },
    {
        id: "Spellcasting Ability",
        pdfId: "SpellcastingAbility 2",
        type: formTypes.TEXT,
        calculateValue: (player) => {
           return dataRetriever.getDataFromPlayer(player, foundryPlayer.spellcastingAbility).toUpperCase(); 
        }
    },
    {
        id: "Spell Save DC",
        pdfId: "SpellSaveDC  2",
        type: formTypes.TEXT,
        calculateValue: (player) => {
            let spellcastingAbility = ATTRIBUTES[dataRetriever.getDataFromPlayer(player, foundryPlayer.spellcastingAbility)];
            let spellCastingValue = dataRetriever.getDataFromPlayer(player, foundryPlayer.attributes[spellcastingAbility].value);
            let spellCastingModifier = fiveEHelper.calculateModifier(spellCastingValue) ;
            let proficiency = dataRetriever.getDataFromPlayer(player, foundryPlayer.proficiency);
            return fiveEHelper.calculateSpellDC(spellCastingModifier, proficiency);
        }
    },
    {
        id: "Spell Attack Bonus",
        pdfId: "SpellAtkBonus 2",
        type: formTypes.TEXT
    }
].concat(
    cantrips,
    lvl1,
    lvl2,
    lvl3,
    lvl4,
    lvl5,
    lvl6,
    lvl7,
    lvl8,
    lvl9
);

export default spells;