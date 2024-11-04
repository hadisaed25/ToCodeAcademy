var dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
if (dnt != "1" && dnt != "yes") {
    (function (i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r;
        (i[r] =
        i[r] ||
        function () {
            (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(
        window,
        document,
        "script",
        "https://www.google-analytics.com/analytics.js",
        "ga"
    );
    ga("create", "", "auto");
    ga("send", "pageview");
}
let currentIndex = 0;

function moveSlide(direction) {
  const images = document.querySelectorAll('.carousel-image');
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  const newTransformValue = -currentIndex * 100;
  images.forEach(image => {
    image.style.transform = `translateX(${newTransformValue}%)`;
  });
}
