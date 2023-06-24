$(document).ready(function () {
  $("button").on({
    click: function () {
      $("p").animate({ height: "300px", opacity: "0.4" }, "slow");
      $("p").animate({ width: "300px", opacity: "0.8" }, "slow");
      $("p").animate({ height: "100px", opacity: "0.4" }, "slow");
      $("p").animate({ fontSize: "3rem" }, "slow");
    },
  });
});
