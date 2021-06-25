// comment
// for debugging
// alert("HI");
(function () {
  //   console.log("HI");
  //   var table = document.getElementsByClassName("table");
  //   console.log(table);
  // store let,const
  let table = 10;
  //   loops (For,While,Dowhile)
  //  loops(map,foreach,filter,reduce)
  // array (key start from 0)
  //   let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //   items.map();
  //   let result = `
  //     9 * 1 = 9
  //     9 * 2 = 18
  // `;
  //   console.log(result);
  // Name Function
  //   function createTable() {
  //     console.log("createTable");
  //   }
  //   anonymous function
  //   let createTable = function () {
  //     console.log("createTable");
  //   };
  const createTable = (res = 9) => {
    let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let tableEle = document.getElementsByClassName("table");
    tableEle[0].innerHTML = "";
    const result = items.map((item, index) => {
      //   console.log(item, index);
      // `` backticks
      // ''  singleqoutes
      //  "" doublequotes

      //   const output = res + "*" + item + "=" + res * item;
      const output = `${res} * ${item} = ${res * item}`;
      const pEle = document.createElement("p");
      //   <p></p>
      pEle.appendChild(document.createTextNode(output));
      //   <p>OutPut</p>
      tableEle[0].appendChild(pEle);
    });
    var headingEle = document.getElementsByClassName("heading");
    headingEle[0].innerHTML = `${res} of Table`;
  };

  //   createTable(table);

  const btnInfo = document.getElementsByClassName("btn-info");
  const inputEle = document.getElementsByClassName("form");
  btnInfo[0].onclick = function () {
    const table = parseInt(inputEle[0].value);
    createTable(table);
  };
})();
