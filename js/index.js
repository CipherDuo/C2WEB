$(function () {
  // Listen for event change
  $(document).on("updateProgressBar", function () {
    $(".intro-cipher").each(function () {
      var $this = $(this),
        rect = $this.find($('[class~="fill-figure"]')),
        valPercentage = (103 / 100) * (rect.attr("data-percent") * 100),
        animationDiv = $("<div></div>");

      animationDiv.css("top", parseFloat(0));

      animationDiv.animate(
        {
          top: valPercentage,
        },
        {
          duration: 2000,
          step: function (value, properties) {
            if (properties.prop === "top") {
              let val = rect.attr("anim-val");
              if (val > value) return; // No anim when mask is already pos higher than value passed
              rect.attr("anim-val", value); // Store attr for later
              rect.css("transform", `translate(0%, -${value}%)`); // Move rect
            }
          },
        }
      );
    });
  });
});

function hideIntroLogo() {
  setTimeout(() => {
    var _lev_1 = document.querySelector("#Livello_1");
    var _lev_2 = document.querySelector("#Livello_2");
    var _text = document.querySelector("#text-cipher");

    _lev_1.classList.add("translate-anim");
    _lev_2.classList.add("translate-anim");

    _text.style.display = "block";
    setTimeout(() => {
      _text.style.visibility = "visible";
      _text.style.opacity = 1;
    }, 350); // Time for text to get in
    setTimeout(() => {
      _lev_1.style.display = "none";
      _lev_2.style.display = "none";
      _text.style.display = "none";
      canvas.style.display = "block";
    }, 1800); // Time for canvas to get in
  }, 2500); // Time for logo to translate
}
