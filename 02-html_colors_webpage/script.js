/*--- Tableau des codes couleurs hexadécimaux ---*/
var signs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
var hex_color_code = '';
var hex_color_codes_array = [];
var i = 0;

for (var i2 = 0; i2 < signs.length; i2++) {
  var pos2 = signs[i2];

  for (var i3 = 0; i3 < signs.length; i3++) {
    var pos3 = signs[i3];
    
    for (var i4 = 0; i4 < signs.length; i4++) {
      var pos4 = signs[i4];
      
      for (var i5 = 0; i5 < signs.length; i5++) {
        var pos5 = signs[i5];
          
        for (var i6 = 0; i6 < signs.length; i6++) {
          var pos6 = signs[i6];
          
          hex_color_code = '0' + pos2 + pos3 + pos4 + pos5 + pos6;
          hex_color_codes_array[i] = hex_color_code;
          i++;
        }
      }
    }
  }
}


/*--- Affichage en console du Tableau des codes couleurs hexadécimaux, pour contrôle ---*/

/*
for (var x = 0; x < hex_color_codes_array.length; x++) {
  console.log(hex_color_codes_array[x]);
}
*/


/*--- Création et remplissage couleur des div ---*/

const main = document.querySelector('main');

function generateHTML(divNumber) {

  var divsHtml = "";
  
  for (counter = 0; counter < divNumber; counter++) {
    
    //console.log(hex_color_codes_array[counter]);
    
    /*--- Carré normal ---*/
    /*
    divsHtml+=`
      <div  style="background-color: #`+ hex_color_codes_array[counter] + `; color: white;">`+ (counter + 1) + `<p>` + hex_color_codes_array[counter]  + `</p></div>
    `;
    */

    /*--- Carré 1px ---*/
    divsHtml+=`
      <div  style="background-color: #`+ hex_color_codes_array[counter] + `; color: white;"></div>
    `;
  
  }

  return divsHtml;

}

//console.log(generateHTML(100));

main.innerHTML = generateHTML(16000);
//main.innerHTML = generateHTML(800000);
