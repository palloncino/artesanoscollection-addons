document.addEventListener("DOMContentLoaded", function () {
  const word = document.getElementById("scroll-to-continue");
  function triggerAnimation() {
    word.style.animation = "none";
    void word.offsetWidth;
    word.style.animation = "test 1s forwards";
  }
  setInterval(triggerAnimation, 3000);
  document.addEventListener("DOMContentLoaded", function () {
    const word = document.getElementById("scroll-to-continue");
    function triggerAnimation() {
      word.style.animation = "none";
      void word.offsetWidth;
      word.style.animation = "test 1s forwards";
    }
    setInterval(triggerAnimation, 3000);
  });
});
