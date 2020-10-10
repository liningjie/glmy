$(function () {
  $(".dropdown-toggle").dropdown();

  // banner
  $(".carousel").carousel({
    interval: 3000, //时间
    pause: "true", //鼠标移上去动画停止
  });
  // $("#mmmm ul li").click(function () {
  //   $("#mmmm ul li").addClass("cur");
  //   console.log(111);
  // });
  $(window).bind("load", function () {
    var preload = new Array();
    $(".hover").each(function () {
      s = $(this)
        .attr("src")
        .replace(/\.(.+)$/i, "_on.$1");
      preload.push(s);
    });
    var img = document.createElement("img");
    $(img)
      .bind("load", function () {
        if (preload[0]) {
          this.src = preload.shift();
        }
      })
      .trigger("load");
  });
});
