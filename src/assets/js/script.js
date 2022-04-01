$(document).ready(function () {});

$("#carrosel img:eq(0)").addClass("banner-ativo").show();

setInterval(slide, 1000);

function slide() {
  if ($(".banner-ativo").next().length) {
    $(".banner-ativo")
      .removeClass("banner-ativo")
      .hide()
      .next()
      .addClass("banner-ativo")
      .show();
  } else {
    $(".banner-ativo").removeClass().hide();
    $("#carrosel img:eq(0)").addClass("banner-ativo").show();
  }
}
$("#barras").click(function () {
  $("#menu").toggleClass("menu-ativo");
});
