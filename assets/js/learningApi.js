// $ == jquery
let index = 0; var records=[]
let url = "https://jsonplaceholder.typicode.com/posts";
$(function () {
  //const addNewRowEle = $(".add-new-row");
  const searchBtnEle = $("#search-btn");
  searchBtnEle.click(handleSearch)
  // addNewRowEle.click(handleClick)
  //   addNewRowEle.click(fetchData);
  fetchData();
});
function handleSearch(){
  const searchInputEle = $("#search-input");
//console.log(searchInputEle.val())
//quam voluptatibus rerum veritatis
const searchRecords=records.filter((item) => {
   return item.title===searchInputEle.val()
  //console.log(item);
});
console.log(searchRecords)
searchRecords.map((item) => {
  handleRow(item,true);
});
} 
function handleRow(item,isNew=false) {
  const rowEle = $("#row");
  rowEle.removeClass("d-none");
  index = item.id;
  //    index++;
  //    const newDiv = $("<div></div>");
  //    newDiv.attr("data-row","abc");
  //    newDiv.addClass("col-lg-3 bg-info");
  //    newDiv.text("Lorem Lipsum");
  //    rowEle.append(newDiv)
  const colEle = $("#row .col-4").first();
  const newCol = colEle.clone();
  newCol.attr("style", "display:none");
  newCol.find(".card-title").text(`${item.title}`);
  newCol.find(".card-text").text(`${item.body}`);
  newCol
    .find(".card-img-top")
    .attr("src", `https://unsplash.it/200?id=${index}`);
    if(isNew===false)
  rowEle.append(newCol);
  else
  {
    rowEle.html("")
    rowEle.append(newCol);
    index=0;
  }
  $("#row .col-4").eq(index).fadeIn(2000);
}
function fetchData() {
  $.ajax({
    url,
    beforeSend,
    success,
    error,
    complete,
  });
}
function beforeSend() {
  console.log("show Loading");
  $(".loader").fadeIn();
}
function success(items) {
  records=items;
  items.map((item) => {
    handleRow(item);
  });
}
function complete() {
  console.log("Hide Loading");
  $(".loader").fadeOut();
}
function error(err, e) {
  let text = "Something went wrong";
  //   if(err.statusText === 'error')
  if (e === "error") {
    text = "Kindly check you internet connection";
  }
  $(".alert").text(text).removeClass("d-none");
}
