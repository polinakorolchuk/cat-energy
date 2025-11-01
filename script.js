document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const range = document.querySelector(".slider__range-js");

  if (slider && range) {
    range.addEventListener("input", () => {
      slider.style.setProperty("--value", `${range.value}%`);
    });
  }
});

ymaps.ready(init);

function init() {
  let centerCoords = [59.938631, 30.323037 - 0.006];
  let zoomLevel = 16;

  const width = window.innerWidth;
  if (width < 768) {
    centerCoords = [59.938631, 30.323037];
    zoomLevel = 15;
  }
  if (width < 400) {
    centerCoords = [59.938631, 30.323037];
  }

  const iconSize = width < 400 ? [57, 53] : [113, 106];
  const iconOffset = width < 400 ? [-28, -40] : [-50, -70];

  const map = new ymaps.Map("map", {
    center: centerCoords,
    zoom: zoomLevel,
    controls: ["zoomControl"],
  });

  const placemark = new ymaps.Placemark(
    [59.938631, 30.323037],
    {
      hintContent: "Главный штаб",
      balloonContent: "Главный штаб",
    },
    {
      iconLayout: "default#image",
      iconImageHref: "./assets/images/logo/map.svg",
      iconImageSize: iconSize,
      iconImageOffset: iconOffset,
    }
  );

  map.geoObjects.add(placemark);
}
