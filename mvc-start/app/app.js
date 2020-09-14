//This is my controller for my app

function showText(data) {
  $(".content").html(data);
  $(".loader").css("display", "none");
}

function initListeners() {
  $("nav a").click(function (e) {
    //   this is using e to find id
    // console.log("click", e.currentTarget.id);
    // this is jQuery's way to do the same thing
    // console.log("jquery", this.id);
    let btnId = this.id;
    $(".loader").css("display", "block");
    MODEL.getText(showText);
    // MODEL.showAlert(btnId);
    // // console.log("btnId", btnId);
    // // $(".content").html(btnId.toUpperCase());
    // // this syntax is called template literal
    // $(".content").html(`<h1>${btnId}</h1>`.toUpperCase());
  });
}

$(document).ready(function () {
  initListeners();
});
