import { formTypes } from "../Form.js";
import { DAMAGE_TYPES } from "../constants/damageTypes.js";

import * as dataRetriever from '../DataRetriever.js';
import * as foundryPlayer from '../FoundryPlayer.js';

function getWeapon(player){
    let items = dataRetriever.getDataFromPlayer(player, foundryPlayer.items);
    
    //Filter by type spell
    let weapons =  items.filter((el) => {
        return el.type === "weapon";
    });
    
    return weapons;
}

function getWeaponName(player, index) {
    return getWeapon(player)[index]?.name;
}

function getWeaponAtkBonus(player, index){
    return getWeapon(player)[index]?.data?.attackBonus;
}

function getWeaponDamage(player, index){
    const weaponDamage = getWeapon(player)[index]?.data?.damage?.parts[0];
    if(weaponDamage) {
        const diceValue = weaponDamage[0].split("+ @mod")[0];
        const damageType = getDamageType(weaponDamage[1]);
        return diceValue + damageType;
    }
    return "";
}

function getDamageType(weaponDamage) {
    return DAMAGE_TYPES[weaponDamage.toLowerCase()]; 
    
}
function listRemainingWeapons(){}

export const weapons = [
    {
        id: "Weapon 1 Name",
        pdfId: "Wpn Name",
        type: formTypes.TEXT,
        calculateValue: (player) => {return getWeaponName(player, 0)}
    },
    {
        id: "Weapon 1 Attack Bonus",
        pdfId: "Wpn1 AtkBonus",
        type: formTypes.TEXT,
        calculateValue: (player) => {return getWeaponAtkBonus(player, 1)}
    },
    {
        id: "Weapon 1 Damage",
        pdfId: "Wpn1 Damage",
        type: formTypes.TEXT,
        calculateValue: (player) => {return getWeaponDamage(player, 0)}
    },
    {
        id: "Weapon 2 Name",
        pdfId: "Wpn Name 2",
        type: formTypes.TEXT,
        calculateValue: (player) => {return getWeaponName(player, 1)}
    },
    {
        id: "Weapon 2 Attack Bonus",
        pdfId: "Wpn2 AtkBonus ",
        type: formTypes.TEXT,
        calculateValue: (player) => {return getWeaponAtkBonus(player, 1)}
    },
    {
        id: "Weapon 2 Damage",
        pdfId: "Wpn2 Damage ",
        type: formTypes.TEXT,
        calculateValue: (player) => {return getWeaponDamage(player, 1)}
    },
    {
        id: "Weapon 3 Name",
        pdfId: "Wpn Name 3",
        type: formTypes.TEXT,
        calculateValue: (player) => {return getWeaponName(player, 2)}
    },
    {
        id: "Weapon 3 Attack Bonus",
        pdfId: "Wpn3 AtkBonus  ",
        type: formTypes.TEXT,
        calculateValue: (player) => {return getWeaponAtkBonus(player, 2)}
    },
    {
        id: "Weapon 3 Damage",
        pdfId: "Wpn3 Damage ",
        type: formTypes.TEXT,
        calculateValue: (player) => {return getWeaponDamage(player, 2)}
    },
    {
        id: "Attacks and Spellcasting",
        pdfId: "AttacksSpellcasting",
        type: formTypes.TEXT
    }
]