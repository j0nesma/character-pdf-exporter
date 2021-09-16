import { PDFDocument, TextAlignment } from "pdf-lib";
import { readFile, writeFile } from "fs";
import { fields, header } from './classes/CharacterSheet.js';
import { formTypes } from './classes/Form.js';
import { playerTest } from './test/exampleCharacter.js';
import * as dataRetriever from './classes/DataRetriever.js'
const sourcePDFPath = "test/5E_CharacterSheet_Fillable.pdf";

readFile(sourcePDFPath, async (err, data) => {
    if (err) throw err;
    const pdfDoc = await PDFDocument.load(data);
    const form = pdfDoc.getForm();

    populateForm(form);

    const pdfBytes = await pdfDoc.save();
    writeFileToLocal(pdfBytes);
    // listAllFieldsInForm(form)
});

function writeFileToLocal(pdfBytes) {
    writeFile("test.pdf", pdfBytes, function (err) {
        if (err) return console.log(err);
        console.log('File has been written');
    });
}

function listAllFieldsInForm(form) {
    //DEBUG
    form.getFields().forEach(id => {
        const type = id.constructor.name;
        const name = id.getName();
        console.log(`${type}: ${name}`)
    })
}

function populateForm(form) {
    for (var i in fields) {
        switch (fields[i].type) {
            case formTypes.TEXT: {
                const textField = form.getTextField(fields[i].pdfId);
                populateField(textField, fields[i])
                break;
            }
            case formTypes.CHECKBOX: {
                const checkbox = form.getCheckBox(fields[i].pdfId);
                populateField(checkbox, fields[i])
                break;
            }
            case formTypes.IMAGE: {
                const image = form.getButton(fields[i].pdfId);
            }
        }

    }
}

function populateField(formField, fieldTemplate, player) {
    var player = playerTest;
    let value;
    if (fieldTemplate.calculateValue) {
        value = fieldTemplate.calculateValue(player);
    }
    if (fieldTemplate.foundryPlayer) {
        value = dataRetriever.getDataFromPlayer(player, fieldTemplate.foundryPlayer)
    }

    if(typeof value === "number"){
        value = value.toString();
    }

    if (value) {
        switch (fieldTemplate.type) {
            case formTypes.TEXT: {
                formField.setText(value);
                if(fieldTemplate.alignLeft){
                    formField.setAlignment(TextAlignment.Left);
                }
                
                break;
            }
            case formTypes.CHECKBOX: {
                if (value) {
                    formField.check();
                }
                break;
            }
        }
    }
    }