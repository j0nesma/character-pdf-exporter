import { PDFDocument } from "pdf-lib";
import {readFile, writeFile} from "fs";
import {fields} from './constants/CharacterSheet.js';
import {formTypes} from './constants/Form.js';
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

function listAllFieldsInForm(form){
    //DEBUG
    form.getFields().forEach(id => {
        const type = id.constructor.name;
        const name = id.getName();
        // console.log(id)
        
        console.log(`${type}: ${name}`)
    })
}

function populateForm(form) {
    for( var i in fields) {
        switch(fields[i].type){
            case formTypes.TEXT: {
                const textField = form.getTextField(fields[i].pdfId);
                textField.setText("WOOO");
                break;
            }
            case formTypes.CHECKBOX: {
                const checkbox = form.getCheckBox(fields[i].pdfId);
                checkbox.check();
                break;
            }
        }
        
    }
}