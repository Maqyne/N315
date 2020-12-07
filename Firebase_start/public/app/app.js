import * as MODEL from "../model/model.js";

function init() {
  $(".get").click(() => {
    console.log("name ", MODEL.myName);
    console.log("secret name ", MODEL.getMyName());
  });
}

$(document).ready(function () {
  init();
});
