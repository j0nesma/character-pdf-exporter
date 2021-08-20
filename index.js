import { PDFDocument } from "pdf-lib";
import {readFile} from "fs";
 
const sourcePDFPath = "test/5E_CharacterSheet_Fillable.pdf";
var sourcePDF;
readFile(sourcePDFPath, (err, data) =>{
    if (err) throw err;
    sourcePDF = data;
    const pdfDoc = PDFDocument.load(sourcePDF).then(data => {
        data.getForm().getFields().forEach(field => {
            const type = field.constructor.name
            const name = field.getName()
            console.log(`${type}: ${name}`)
          })
    });
});

 