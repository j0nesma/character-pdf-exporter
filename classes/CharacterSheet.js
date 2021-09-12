import {formTypes} from './Form.js';
import * as foundryPlayer from './FoundryPlayer.js';
import * as fiveEHelper from './5eHelper.js';
import * as dataRetriever from './DataRetriever.js'

export const savingThrows = [
    {
        id: "ST Strength",
        pdfId: "ST Strength",
        type: formTypes.TEXT,
        calculateValue: (player) => {
            let Obj = dataRetriever.getDataFromPlayer(
                player, 
                foundryPlayer.attributes.STRENGTH.object
            );
            let playerProf = dataRetriever.getDataFromPlayer(
                player, 
                foundryPlayer.proficiency
            )
            return fiveEHelper.calculateSavingThrow(Obj, playerProf)
        }
    },
    {
        id: "ST Strength Prof",
        pdfId: "Check Box 11",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.attributes.STRENGTH.proficient
    },
    {
        id: "ST Dexterity",
        pdfId: "ST Dexterity",
        type: formTypes.TEXT,
        calculateValue: (player) => {
            let Obj = dataRetriever.getDataFromPlayer(
                player, 
                foundryPlayer.attributes.DEXTERITY.object
            );
            let playerProf = dataRetriever.getDataFromPlayer(
                player, 
                foundryPlayer.proficiency
            )
            return fiveEHelper.calculateSavingThrow(Obj, playerProf)
        }
    },
    {
        id: "ST Dexterity Prof",
        pdfId: "Check Box 18",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.attributes.DEXTERITY.proficient
    },
    {
        id: "ST Constitution",
        pdfId: "ST Constitution",
        type: formTypes.TEXT,
        calculateValue: (player) => {
            let Obj = dataRetriever.getDataFromPlayer(
                player, 
                foundryPlayer.attributes.CONSTITUTION.object
            );
            let playerProf = dataRetriever.getDataFromPlayer(
                player, 
                foundryPlayer.proficiency
            )
            return fiveEHelper.calculateSavingThrow(Obj, playerProf)
        }
    },
    {
        id: "ST Constitution Prof",
        pdfId: "Check Box 19",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.attributes.CONSTITUTION.proficient
    },
    {
        id: "ST Intelligence",
        pdfId: "ST Intelligence",
        type: formTypes.TEXT,
        calculateValue: (player) => {
            let Obj = dataRetriever.getDataFromPlayer(
                player, 
                foundryPlayer.attributes.INTELLIGENCE.object
            );
            let playerProf = dataRetriever.getDataFromPlayer(
                player, 
                foundryPlayer.proficiency
            )
            return fiveEHelper.calculateSavingThrow(Obj, playerProf)
        }
    },
    {
        id: "ST Intelligence Prof",
        pdfId: "Check Box 20",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.attributes.INTELLIGENCE.proficient
    },
    {
        id: "ST Wisdom",
        pdfId: "ST Wisdom",
        type: formTypes.TEXT,
        calculateValue: (player) => {
            let Obj = dataRetriever.getDataFromPlayer(
                player, 
                foundryPlayer.attributes.WISDOM.object
            );
            let playerProf = dataRetriever.getDataFromPlayer(
                player, 
                foundryPlayer.proficiency
            )
            return fiveEHelper.calculateSavingThrow(Obj, playerProf)
        }
    },
    {
        id: "ST Wisdom Prof",
        pdfId: "Check Box 21",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.attributes.WISDOM.proficient
    },
    {
        id: "ST Charisma",
        pdfId: "ST Charisma",
        type: formTypes.TEXT,
        calculateValue: (player) => {
            let Obj = dataRetriever.getDataFromPlayer(
                player, 
                foundryPlayer.attributes.CHARISMA.object
            );
            let playerProf = dataRetriever.getDataFromPlayer(
                player, 
                foundryPlayer.proficiency
            )
            return fiveEHelper.calculateSavingThrow(Obj, playerProf)
        }
    },
    {
        id: "ST Charisma Prof",
        pdfId: "Check Box 22",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.attributes.CHARISMA.proficient
    },
];

export const attributes = [
    {
        id: "STR",
        pdfId: "STR",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.attributes.STRENGTH.value
    },
    {
        id: "STR mod",
        pdfId: "STRmod",
        type: formTypes.TEXT,
        calculateValue: (player) =>  { return fiveEHelper.calculateFormattedModifier(dataRetriever.getDataFromPlayer(player, foundryPlayer.attributes.STRENGTH.value)); } 
        
    },
    {
        id: "DEX",
        pdfId: "DEX",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.attributes.DEXTERITY.value
    },
    {
        id: "DEX mod",
        pdfId: "DEXmod ",
        type: formTypes.TEXT,
        calculateValue: (player) => {
            return fiveEHelper.calculateFormattedModifier(dataRetriever.getDataFromPlayer(player, foundryPlayer.attributes.DEXTERITY.value));
        }
    },
    {
        id: "CON",
        pdfId: "CON",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.attributes.CONSTITUTION.value
    },
    {
        id: "CON mod",
        pdfId: "CONmod",
        type: formTypes.TEXT,
        calculateValue: (player) => {
            return fiveEHelper.calculateFormattedModifier(dataRetriever.getDataFromPlayer(player, foundryPlayer.attributes.CONSTITUTION.value));
        }
    },
    {
        id: "INT",
        pdfId: "INT",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.attributes.INTELLIGENCE.value
    },
    {
        id: "INT mod",
        pdfId: "INTmod",
        type: formTypes.TEXT,
        calculateValue: (player) => {
            return fiveEHelper.calculateFormattedModifier(dataRetriever.getDataFromPlayer(player, foundryPlayer.attributes.INTELLIGENCE.value));
        }
    },
    {
        id: "WIS",
        pdfId: "WIS",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.attributes.WISDOM.value
    },
    {
        id: "WIS mod",
        pdfId: "WISmod",
        type: formTypes.TEXT,
        calculateValue: (player) => {
            return fiveEHelper.calculateFormattedModifier(dataRetriever.getDataFromPlayer(player, foundryPlayer.attributes.WISDOM.value));
        }
    },
    {
        id: "CHA",
        pdfId: "CHA",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.attributes.CHARISMA.value
    },
    {
        id: "CHA mod",
        pdfId: "CHamod",
        type: formTypes.TEXT,
        calculateValue: (player) => {
            return fiveEHelper.calculateFormattedModifier(dataRetriever.getDataFromPlayer(player, foundryPlayer.attributes.CHARISMA.value));
        }
    },
]

export const weapons = [
    {
        id: "Weapon 1 Name",
        pdfId: "Wpn Name",
        type: formTypes.TEXT
    },
    {
        id: "Weapon 1 Attack Bonus",
        pdfId: "Wpn1 AtkBonus",
        type: formTypes.TEXT
    },
    {
        id: "Weapon 1 Damage",
        pdfId: "Wpn1 Damage",
        type: formTypes.TEXT
    },
    {
        id: "Weapon 2 Name",
        pdfId: "Wpn Name 2",
        type: formTypes.TEXT
    },
    {
        id: "Weapon 2 Attack Bonus",
        pdfId: "Wpn2 AtkBonus ",
        type: formTypes.TEXT
    },
    {
        id: "Weapon 2 Damage",
        pdfId: "Wpn2 Damage ",
        type: formTypes.TEXT
    },
    {
        id: "Weapon 3 Name",
        pdfId: "Wpn Name 3",
        type: formTypes.TEXT
    },
    {
        id: "Weapon 3 Attack Bonus",
        pdfId: "Wpn3 AtkBonus  ",
        type: formTypes.TEXT
    },
    {
        id: "Weapon 3 Damage",
        pdfId: "Wpn3 Damage ",
        type: formTypes.TEXT
    },
    {
        id: "Attacks and Spellcasting",
        pdfId: "AttacksSpellcasting",
        type: formTypes.TEXT
    }
]

export const skills = [
    {
        id: "Acrobatics",
        pdfId: "Acrobatics",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.ACO.total
    },
    {
        id: "Acrobatics Prof",
        pdfId: "Check Box 23",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.ACO.proficiency
    },
    {
        id: "Animal Handling",
        pdfId: "Animal",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.ANI.total
    },
    {
        id: "Animal Handling Prof",
        pdfId: "Check Box 24",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.ANI.proficiency
    },
    {
        id: "Arcana",
        pdfId: "Arcana",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.ARC.total
    },
    {
        id: "Arcana Prof",
        pdfId: "Check Box 25",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.ACO.proficiency
    },
    {
        id: "Athletics",
        pdfId: "Athletics",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.ATH.total
    },
    {
        id: "Athletics Prof",
        pdfId: "Check Box 26",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.ATH.proficiency
    },
    {
        id: "Deception",
        pdfId: "Deception ",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.DEC.total
    },
    {
        id: "Deception Prof",
        pdfId: "Check Box 27",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.DEC.proficiency
    },
    {
        id: "History",
        pdfId: "History ",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.HIS.total
    },
    {
        id: "History Prof",
        pdfId: "Check Box 28",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.HIS.proficiency
    },
    {
        id: "Insight",
        pdfId: "Insight",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.INS.total
    },
    {
        id: "Insight Prof",
        pdfId: "Check Box 29",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.INS.proficiency
    },
    {
        id: "Intimidation",
        pdfId: "Intimidation",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.ITM.total
    },
    {
        id: "Intimidation Prof",
        pdfId: "Check Box 30",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.ITM.proficiency
    },
    {
        id: "Investigation",
        pdfId: "Investigation ",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.INV.total
    },
    {
        id: "Investigation Prof",
        pdfId: "Check Box 31",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.INV.proficiency
    },
    {
        id: "Medicine",
        pdfId: "Medicine",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.MED.total
    },
    {
        id: "Medicine Prof",
        pdfId: "Check Box 32",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.MED.proficiency
    },
    {
        id: "Nature",
        pdfId: "Nature",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.NAT.total
    },
    {
        id: "Nature Prof",
        pdfId: "Check Box 33",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.NAT.proficiency
    },
    {
        id: "Perception",
        pdfId: "Perception ",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.PRC.total
    },
    {
        id: "Perception Prof",
        pdfId: "Check Box 34",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.PRC.proficiency
    },
    {
        id: "Performance",
        pdfId: "Performance",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.PRF.total
    },
    {
        id: "Performance Prof",
        pdfId: "Check Box 35",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.PRF.proficiency
    },
    {
        id: "Persuasion",
        pdfId: "Persuasion",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.PER.total
    },
    {
        id: "Persuasion Prof",
        pdfId: "Check Box 36",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.PER.proficiency
    },
    {
        id: "Religion",
        pdfId: "Religion",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.REL.total
    },
    {
        id: "Religion Prof",
        pdfId: "Check Box 37",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.REL.proficiency
    },
    {
        id: "Sleight of Hand",
        pdfId: "SleightofHand",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.SLT.total
    },
    {
        id: "Sleight of Hand Prof",
        pdfId: "Check Box 38",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.SLT.proficiency
    },
    {
        id: "Stealth",
        pdfId: "Stealth ",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.STE.total
    },
    {
        id: "Stealth Prof",
        pdfId: "Check Box 39",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.STE.proficiency
    },
    {
        id: "Survival",
        pdfId: "Survival",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.SUR.total
    },
    {
        id: "Survival Prof",
        pdfId: "Check Box 40",
        type: formTypes.CHECKBOX,
        foundryPlayer: foundryPlayer.skills.SUR.proficiency
    }
]

export const header = [
    {
        id: "Level",
        pdfId: "ClassLevel",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.classType
    },
    {
        id: "Background",
        pdfId: "Background",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.background
    },
    {
        id: "Player Name",
        pdfId: "PlayerName",
        type: formTypes.TEXT,
    },
    {
        id: "Character Name",
        pdfId: "CharacterName",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.playerName
    },
    {
        id: "Race",
        pdfId: "Race ",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.race
    },
    {
        id: "Alignment",
        pdfId: "Alignment",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.alignment
    },
    {
        id: "XP",
        pdfId: "XP",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.xp
    },
    {
        id: "Character Name",
        pdfId: "CharacterName 2",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.playerName
    },
    {
        id: "Age",
        pdfId: "Age",
        type: formTypes.TEXT
    },
    {
        id: "Height",
        pdfId: "Height",
        type: formTypes.TEXT
    },
    {
        id: "Weight",
        pdfId: "Weight",
        type: formTypes.TEXT
    },
    {
        id: "Eyes",
        pdfId: "Eyes",
        type: formTypes.TEXT
    },
    {
        id: "Skin",
        pdfId: "Skin",
        type: formTypes.TEXT
    },
    {
        id: "Hair",
        pdfId: "Hair",
        type: formTypes.TEXT
    },
]

export const characterStats = [
    {
        id: "AC",
        pdfId: "AC",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.ac
    },
    {
        id: "Initiative",
        pdfId: "Initiative",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.initiative
    },
    //TODO missing ft
    {
        id: "Speed",
        pdfId: "Speed",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.speed
    },
    {
        id: "HP Max",
        pdfId: "HPMax",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.hpMax
    },
    {
        id: "HP Current",
        pdfId: "HPCurrent",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.hpCurrent
    },
    {
        id: "HP Temp",
        pdfId: "HPTemp",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.hpTemp
    },
    {
        id: "HD Total",
        pdfId: "HDTotal",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.hitDice
    },
    {
        id: "Hit Dice",
        pdfId: "HD",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.hitDice
    },
    //TODO FORMULATION
    {
        id: "DS success 1",
        pdfId: "Check Box 12",
        type: formTypes.CHECKBOX
    },
    {
        id: "DS success 2",
        pdfId: "Check Box 13",
        type: formTypes.CHECKBOX
    },
    {
        id: "DS success 3",
        pdfId: "Check Box 14",
        type: formTypes.CHECKBOX
    },
    {
        id: "DS fail 1",
        pdfId: "Check Box 15",
        type: formTypes.CHECKBOX
    },
    {
        id: "DS fail 2",
        pdfId: "Check Box 16",
        type: formTypes.CHECKBOX
    },
    {
        id: "DS fail 3",
        pdfId: "Check Box 17",
        type: formTypes.CHECKBOX
    }
]

export const backstory = [
    {
        id: "Ideals",
        pdfId: "Ideals",
        type: formTypes.TEXT
    },
    {
        id: "Bonds",
        pdfId: "Bonds",
        type: formTypes.TEXT
    },
    {
        id: "Personality Traits",
        pdfId: "PersonalityTraits ",
        type: formTypes.TEXT
    },
    {
        id: "Flaws",
        pdfId: "Flaws",
        type: formTypes.TEXT
    }
]

export const money = [
    {
        id: "Copper",
        pdfId: "CP",
        type: formTypes.TEXT
    },
    {
        id: "Silver",
        pdfId: "SP",
        type: formTypes.TEXT
    },
    {
        id: "Electrum",
        pdfId: "EP",
        type: formTypes.TEXT
    },
    {
        id: "Gold",
        pdfId: "GP",
        type: formTypes.TEXT
    },
    {
        id: "Platinum",
        pdfId: "PP",
        type: formTypes.TEXT
    },
]

export const fractionAndAllies = [
    {
        id: "Faction Symbol Image",
        pdfId: "Faction Symbol Image",
        type: formTypes.IMAGE
    },
    {
        id: "Allies",
        pdfId: "Allies",
        type: formTypes.TEXT
    },
    {
        id: "FactionName",
        pdfId: "FactionName",
        type: formTypes.TEXT
    },
    {
        id: "Backstory",
        pdfId: "Backstory",
        type: formTypes.TEXT
    },
    {
        id: "Features and Traits",
        pdfId: "Feat+Traits",
        type: formTypes.TEXT
    },
    {
        id: "Treasure",
        pdfId: "Treasure",
        type: formTypes.TEXT
    },
]
export const fields = [
    {
        id: "Inspiration",
        pdfId: "Inspiration",
        type: formTypes.TEXT
    },
    {
        id: "Prof Bonus",
        pdfId: "ProfBonus",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.proficiency
    },
    {
        id: "Passive Perception",
        pdfId: "Passive",
        type: formTypes.TEXT,
        foundryPlayer: foundryPlayer.skills.PRC.passive
    },
    {
        id: "Other Proficiencies and Languages",
        pdfId: "ProficienciesLang",
        type: formTypes.TEXT
    },
    {
        id: "Features and Traits",
        pdfId: "Features and Traits",
        type: formTypes.TEXT
    },
    {
        id: "Equipment",
        pdfId: "Equipment",
        type: formTypes.TEXT
    },
    {
        id: "Character Image",
        pdfId: "CHARACTER IMAGE",
        type: formTypes.IMAGE
    }
].concat(
    header,
    backstory,
    characterStats,
    savingThrows,
    attributes,
    skills,
    money,
    weapons,
    fractionAndAllies);

export default { fields, header };