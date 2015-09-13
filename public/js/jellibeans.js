function fillHidTable(){
  if (isOK() && isFilled()){
    var htqf; //-- hidden field
    var rf; //-- retrieved field
    for ( var i = 1; i < 51; i++ ) {
        rf = "htqf"+i;
        document.getElementById(rf).innerHTML = document.getElementById("Q"+i+"CALC").value;
    }
    tableToExcel('hidTable', 'Analysis Results');
  }
}

var tableToExcel = (function() {
    var uri = 'data:application/vnd.ms-excel;base64,'
            , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
            , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
            , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
    return function(table, name) {
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
        window.location.href = uri + base64(format(template, ctx))
    }
})()

function isOK(){
  okVal = true;
    for ( var i = 1; i < 51; i++ ){
      if (document.getElementById('Q' + i + 'CALC').value > 1 ){
        okVal = false;
      }
    }

    if (okVal === false) {
      alert('You have entered a number that is not one of the possible options. The score is therefore not valid. Check your answers and try again.');
    }
    return okVal;
        //return true if all vals are filled.
  }

function isFilled(){
emptyVal = true;
for ( var i = 1; i < 51; i++ ){
  if (document.getElementById('Q' + i + 'CALC').value ===""){
    emptyVal = false;
  }
}

if (emptyVal === false) {
  alert('Please complete all 50 items of your Autism Assessment to get started. The AQ score is not valid otherwise.');
}
return emptyVal;
    //return true if all vals are filled.
}

function calculateAQ(){
var score = null;
  if (isOK() && isFilled()){
    for ( var i = 1; i < 51; i++ ){
    	score = score + +document.getElementById('Q' + i + 'CALC').value;
    }
  document.getElementById('score').value = score;
  alert('Your Autism Score is: ' + score);
  return score;
  }
}






