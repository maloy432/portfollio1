const burger = document.getElementById("burgerBtn");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "100%";
    navLinks.style.left = "0";
    navLinks.style.right = "0";
    navLinks.style.background = "rgba(255,255,255,0.96)";
    navLinks.style.backdropFilter = "blur(12px)";
    navLinks.style.padding = "24px";
    navLinks.style.gap = "16px";
    navLinks.style.borderBottom = "1px solid rgba(0,0,0,0.04)";
    navLinks.style.boxShadow = "0 20px 40px -12px rgba(0,0,0,0.08)";
  }
});

document.querySelectorAll(".nav__lists a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.style.display = "none";
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "row";
    navLinks.style.position = "static";
    navLinks.style.background = "transparent";
    navLinks.style.backdropFilter = "none";
    navLinks.style.padding = "0";
    navLinks.style.gap = "28px";
    navLinks.style.borderBottom = "none";
    navLinks.style.boxShadow = "none";
  } else {
    navLinks.style.display = "none";
  }
});

const familyCarousel = document.querySelector(".a3d");

if (familyCarousel) {
  const familyWrapper = document.querySelector(".family-carousel-wrapper");
  let familyTimer;

  const showNextFamilyMember = () => {
    familyCarousel.append(familyCarousel.firstElementChild);
  };

  const showPreviousFamilyMember = () => {
    familyCarousel.prepend(familyCarousel.lastElementChild);
  };

  const startFamilyAutoplay = () => {
    window.clearInterval(familyTimer);
    familyTimer = window.setInterval(showNextFamilyMember, 3500);
  };

  document.querySelector(".family-next").addEventListener("click", () => {
    showNextFamilyMember();
    startFamilyAutoplay();
  });

  document.querySelector(".family-prev").addEventListener("click", () => {
    showPreviousFamilyMember();
    startFamilyAutoplay();
  });

  familyWrapper.addEventListener("mouseenter", () =>
    window.clearInterval(familyTimer),
  );
  familyWrapper.addEventListener("mouseleave", startFamilyAutoplay);
  familyWrapper.addEventListener("focusin", () =>
    window.clearInterval(familyTimer),
  );
  familyWrapper.addEventListener("focusout", startFamilyAutoplay);

  startFamilyAutoplay();
}

$(document).ready(function () {
  var carousel = $(".carousel");
  var currdeg = 0;

  $(".next-btn").on("click", function () {
    currdeg = currdeg - 60;
    rotateCarousel();
  });

  $(".prev-btn").on("click", function () {
    currdeg = currdeg + 60;
    rotateCarousel();
  });

  function rotateCarousel() {
    carousel.css({
      "-webkit-transform": "rotateY(" + currdeg + "deg)",
      "-moz-transform": "rotateY(" + currdeg + "deg)",
      "-o-transform": "rotateY(" + currdeg + "deg)",
      transform: "rotateY(" + currdeg + "deg)",
    });
  }

  let autoRotate = setInterval(function () {
    currdeg = currdeg - 60;
    rotateCarousel();
  }, 2000);

  $(".carousel-container").hover(
    function () {
      clearInterval(autoRotate);
    },
    function () {
      autoRotate = setInterval(function () {
        currdeg = currdeg - 60;
        rotateCarousel();
      }, 4000);
    },
  );
});
