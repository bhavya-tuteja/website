// $ == jquery
let index = 0;
$(function(){
    const addNewRowEle = $(".add-new-row");
    addNewRowEle.click(handleClick)
})

function handleClick() {
   const rowEle =  $("#row");
   index = index +1;
//    index++;
//    const newDiv = $("<div></div>");
//    newDiv.attr("data-row","abc");
//    newDiv.addClass("col-lg-3 bg-info");
//    newDiv.text("Lorem Lipsum");
//    rowEle.append(newDiv) 
    const colEle =  $("#row .col-4").first();
    const newCol = colEle.clone();
    newCol.attr("style","display:none")
    newCol.find('.card-title').text(`Card ${index}`)
    newCol.find('.card-img-top').attr("src",`https://unsplash.it/200?id=${index}`);
    rowEle.append(newCol);
    $("#row .col-4").eq(index).fadeIn(2000)

}