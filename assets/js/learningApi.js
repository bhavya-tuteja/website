// $ == jquery
let index = 0;
let url = "https://jsonplaceholder.typicode.com/posts";
$(function () {
  const addNewRowEle = $(".add-new-row");
  // addNewRowEle.click(handleClick)
  //   addNewRowEle.click(fetchData);
  fetchData();
});

function handleRow(item) {
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
  rowEle.append(newCol);
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
