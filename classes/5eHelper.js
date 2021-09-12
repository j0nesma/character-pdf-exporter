export function calculateFormattedModifier(value) {
    let modifier = calculateModifier(value);
    return formatNumber(modifier);
}

export function calculateModifier(value) {
   return Math.floor((value - 10 ) / 2);
}

export function calculateSavingThrow(attributeObject, playerProf) {
    let savingThrow = calculateModifier(attributeObject.value);
    if(attributeObject.proficient) {
        savingThrow+=playerProf;
    }
    return formatNumber(savingThrow)
}

function formatNumber(value) {
    if(value >= 0 ) {
        return "+" + value;
    } else {
        return value;
    }
}