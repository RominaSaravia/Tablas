let data;
let tablaResult;
let separadorPicked = ";";

const separador = document.getElementById("separador")
separador.addEventListener("change", () => {
  separadorPicked = separador.value;

})

document.getElementById('inputfile').addEventListener('change', function () {
  let fr = new FileReader();
  fr.onload = function () {
    data = fr.result;
  }

  fr.readAsText(this.files[0]);

})


function getTabla() {
  const colCount = document.getElementById("columns");
  const tablaBody = document.getElementById("createTableBody");
  const tablaHead = document.getElementById("createTableHead");

  //Para colorear palabras claves
  const caseSensitive = document.getElementById("caseSensitive");

  const colorPick01 = document.getElementById("picColor01");
  const keyWord01 = document.getElementById("keyWord01");
  const colorPick02 = document.getElementById("picColor02");
  const keyWord02 = document.getElementById("keyWord02");
  const colorPick03 = document.getElementById("picColor03");
  const keyWord03 = document.getElementById("keyWord03");
  const colorPick04 = document.getElementById("picColor04");
  const keyWord04 = document.getElementById("keyWord04");

  
  tablaHead.innerHTML = "";
  tablaBody.innerHTML = "";
  
  
  const dataTabla = data;
  const useData = dataTabla.split(separadorPicked);
  tablaResult = [];

  do {
    let z;
    let newRow = [];

    for (y = 0; y < colCount.value; y++) {
      z = useData.shift();
      newRow.push(z);
    }

    tablaResult.push(newRow);
  } while (useData.length > 1);


  //Dibujar tabla
  for (y = 0; y < tablaResult.length; y++) {

    if (y === 0) {
      const newRow = document.createElement("tr")
      for (x = 0; x < colCount.value; x++) {

        if (tablaResult[y][x] != undefined) {
          const newCol = document.createElement("th")
          newCol.textContent += ((tablaResult[y][x]).replace(/[^ -~]+/g, ""));
          
          newRow.appendChild(newCol);
        }
        
        tablaHead.appendChild(newRow);
      }



    } else {
      const newRow = document.createElement("tr")

      for (x = 0; x < colCount.value; x++) {
  
        if (tablaResult[y][x] != undefined) {
  
          const newCol = document.createElement("td")
          newCol.textContent += ((tablaResult[y][x]).replace(/[^ -~]+/g, ""));
  
          //COLOREAR
          if (caseSensitive.checked) {
  
            if (newCol.textContent === (`${keyWord01.value}`) && keyWord01.value) {
              newCol.style.backgroundColor = `${colorPick01.value}`;
            }
            if (newCol.textContent === (`${keyWord02.value}`) && keyWord02.value) {
              newCol.style.backgroundColor = `${colorPick02.value}`;
            }
            if (newCol.textContent === (`${keyWord03.value}`) && keyWord03.value) {
              newCol.style.backgroundColor = `${colorPick03.value}`;
            }
            if (newCol.textContent === (`${keyWord04.value}`) && keyWord04.value) {
              newCol.style.backgroundColor = `${colorPick04.value}`;
            }
  
          } else {
  
            if (newCol.textContent.toUpperCase() === keyWord01.value.toUpperCase() && keyWord01.value) {
              newCol.style.backgroundColor = `${colorPick01.value}`;
            }
            if (newCol.textContent.toUpperCase() === keyWord02.value.toUpperCase() && keyWord02.value) {
              newCol.style.backgroundColor = `${colorPick02.value}`;
            }
            if (newCol.textContent.toUpperCase() === keyWord03.value.toUpperCase() && keyWord03.value) {
              newCol.style.backgroundColor = `${colorPick03.value}`;
            }
            if (newCol.textContent.toUpperCase() === keyWord04.value.toUpperCase() && keyWord04.value) {
              newCol.style.backgroundColor = `${colorPick04.value}`;
            }
          }
          newRow.appendChild(newCol);
        }   

        tablaBody.appendChild(newRow);
      }

    }

  }
}