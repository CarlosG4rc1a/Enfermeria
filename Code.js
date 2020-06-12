function doGet() {
    var template =  HtmlService.createTemplateFromFile('index'); // Método para la creación del  template
    return template.evaluate().addMetaTag('viewport', 'width=device-width, initial-scale=1.0'); // se evalua la metadata de la cabecera
}
function include (filename) {
    return HtmlService.createTemplateFromFile(filename).getRawContent();
}
function completar(){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1CJ2lBb3u6RjEkpEIFTetse4DYx_7WrnwIU3dtzMyOpQ/edit#gid=752756600');
    var sheet = ss.getSheetByName('Grupos');
    var data = sheet.getRange(1,1).getDataRegion().getValues();
    var grupo = {};
    data.forEach(function(n){
        grupo[n[8]] = null;
        });
    return grupo;
}
function autocompletar(clase){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1CJ2lBb3u6RjEkpEIFTetse4DYx_7WrnwIU3dtzMyOpQ/edit#gid=752756600');
    var sheet = ss.getSheetByName(clase);
    var data = sheet.getRange(1,1).getDataRegion().getValues();
    var nombre = {};
    data.forEach(function(n){
        nombre[n[1]] = null;
        });
    return nombre;
}
function data(alumno){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1CJ2lBb3u6RjEkpEIFTetse4DYx_7WrnwIU3dtzMyOpQ/edit#gid=752756600');
    var grupo = alumno[1];
    var nombre = alumno [0];
    var sheet = ss.getSheetByName(grupo);
    var lastrowbd = sheet.getDataRange().getNumRows();
    var column = sheet.getDataRange();
    var value = column.getValues();
    var student = {};
    for(var i = 0; i < lastrowbd; i++)
    {
      if(value[i][1] == nombre)
      {
        student[0] = value[i] && value[i][3];
        student[1] = value[i] && value[i][4];
        student[2] = value[i] && value[i][7];
        student[3] = value[i] && value[i][8];
        i = lastrowbd + 1;
      }
    }
}
function getaemail (alumno){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1CJ2lBb3u6RjEkpEIFTetse4DYx_7WrnwIU3dtzMyOpQ/edit#gid=752756600');
    var grupo = alumno[1];
    var nombre = alumno [0];
    var sheet = ss.getSheetByName(grupo);
    var lastrowbd = sheet.getDataRange().getNumRows();
    var column = sheet.getDataRange();
    var value = column.getValues();
    for(var i = 0; i < lastrowbd; i++)
    {
      if(value[i][1] == nombre)
      {
        var aemail = value[i] && value[i][3];
        i = lastrowbd + 1;
      }
    }
    return aemail;
}
function getfemail (alumno){
    var grupo = alumno[1];
    var nombre = alumno [0];
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1CJ2lBb3u6RjEkpEIFTetse4DYx_7WrnwIU3dtzMyOpQ/edit#gid=752756600');
    var sheet = ss.getSheetByName(grupo);
    var lastrowbd = sheet.getDataRange().getNumRows();
    var column = sheet.getDataRange();
    var value = column.getValues();
    for(var i = 0; i < lastrowbd; i++)
    {
      if(value[i][1] == nombre)
      {
        var femail = value[i] && value[i][4];
        i = lastrowbd + 1;
      }
    }
    return femail;
}
function getphone (alumno){
    var grupo = alumno[1];
    var nombre = alumno [0];
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1CJ2lBb3u6RjEkpEIFTetse4DYx_7WrnwIU3dtzMyOpQ/edit#gid=752756600');
    var sheet = ss.getSheetByName(grupo);
    var lastrowbd = sheet.getDataRange().getNumRows();
    var column = sheet.getDataRange();
    var value = column.getValues();
    for(var i = 0; i < lastrowbd; i++)
    {
      if(value[i][1] == nombre)
      {
        var phone = value[i] && value[i][7];
        i = lastrowbd + 1;
      }
    }
    return phone;
}
function getephone (alumno){
    var grupo = alumno[1];
    var nombre = alumno [0];
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1CJ2lBb3u6RjEkpEIFTetse4DYx_7WrnwIU3dtzMyOpQ/edit#gid=752756600');
    var sheet = ss.getSheetByName(grupo);
    var lastrowbd = sheet.getDataRange().getNumRows();
    var column = sheet.getDataRange();
    var value = column.getValues();
    for(var i = 0; i < lastrowbd; i++)
    {
      if(value[i][1] == nombre)
      {
        var ephone = value[i] && value[i][8];
        i = lastrowbd + 1;
      }
    }
    return ephone;
}