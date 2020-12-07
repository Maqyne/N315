var MODEL = (function () {
  var _getView = function (viewName) {
    $.get(`views/${viewName}.html`, function (data) {
      $("#content").html(data);
    });
  };
  return {
    getView: _getView,
  };
})();

// var _db;
// var _currentPage = "";

// export function initFirebase() {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       pullAll();
//     } else {
//       _db = "";
//     }
//   });
// }

// export function signIn(callback) {
//   firebase
//     .auth()
//     .signInAnonymously()
//     .then(function (result) {
//       _db = firebase.firestore();
//       callback();
//     });
// }

// export function initSite() {
//   $.get("views/nav.html", function (nav) {
//     $("#nav").html(nav);

//     initListen();
//   });

//   $.get("views/main.html", function (data) {
//     $("#app").html(data);
//   });

//   $.get("views/footer.html", function (data) {
//     $("#footer").html(data);
//   });
// }
