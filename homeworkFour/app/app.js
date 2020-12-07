var obj = {
  Students: [
    {
      key: "value",
      firstName: "Todd",
      lastName: "Shelton",
      classesAndGrades: [
        {
          className: "n315",
          grade: "B",
        },
        {
          className: "n215",
          grade: "D",
        },
      ],
    },
    {
      key: "value",
      firstName: "Tom",
      lastName: "Shel",
    },
  ],
};

function initListen() {
  $("#nav nav a").click(function (e) {
    var btnID = this.id;
    // console.log(btnID);
    MODEL.getView(btnID);
  });

  $("#nav nav .navicon").click(function (e) {
    $("nav").toggleClass("navMobileView");
    // $(".links").toggleClass("links linksMobileView");
  });

  $(".getData").click(function (e) {
    // for (let i = 0; i < obj.Students.length; i++) {
    //   console.log("obj " + i + " ", obj.Students[i]);
    // }

    $.each(obj.Students, function (idx, student) {
      console.log(student.firstName);

      $.each(student.classesAndGrades, function (idx, classAndGrade) {
        console.log(classAndGrade.className + " " + classAndGrade.grade);
      });
    });
  });
}

function initSite() {
  $.get("views/nav.html", function (nav) {
    $("#nav").html(nav);

    initListen();
  });

  $.get("views/home.html", function (data) {
    $("#app").html(data);
  });

  $.get("views/footer.html", function (data) {
    $("#footer").html(data);
  });
}

$(document).ready(function () {
  initSite();
  // initListen();
});
