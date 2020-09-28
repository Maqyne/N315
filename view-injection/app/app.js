function initListen() {
  $("#nav nav a").click(function (e) {
    var btnID = this.id;
    console.log(btnID);
    MODEL.getView(btnID);
  });
}

function initSite() {
  $.get("../views/nav.html", function (nav) {
    $("#nav").html(nav);

    initListen();
  });

  $.get("../views/home.html", function (data) {
    $("#app").html(data);
  });

  $.get("../views/footer.html", function (data) {
    $("#footer").html(data);
  });
}

$(document).ready(function () {
  initSite();
  initListen();
});
