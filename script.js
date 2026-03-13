$(document).ready(function () {

  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.addClass("close");

  envelope.click(function () {
    openEnvelope();
  });

  btn_open.click(function () {
    openEnvelope();
  });

  btn_reset.click(function () {
    closeEnvelope();
  });

  function openEnvelope() {
    envelope.removeClass("close").addClass("open");
    createShootingStar();
  }

  function closeEnvelope() {
    envelope.removeClass("open").addClass("close");
  }

  function createShootingStar() {
    const star = document.createElement("div");
    star.className = "shooting-star";
    star.style.top = "-50px";
    star.style.left = "-50px";
    document.body.appendChild(star);

    setTimeout(function () {
      star.remove();
    }, 8000);
  }

});
