//This is my controller for my app

function showPage(data) {
  $(".content").html(data);
  $(".loader").css("display", "none");
}

function initListeners() {
  $("nav a").click(function (e) {
    let btnId = this.id;
    $(".loader").css("display", "block");
    if (btnId == "duck") {
      MODEL.getDuck(showPage);
    } else if (btnId == "pig") {
      MODEL.getPig(showPage);
    } else if (btnId == "goat") {
      MODEL.getGoat(showPage);
    } else if (btnId == "cow") {
      MODEL.getCow(showPage);
    } else {
      MODEL.getHome(showPage);
    }
  });
}

$(document).ready(function () {
  initListeners();
  MODEL.getHome(showPage);
});
