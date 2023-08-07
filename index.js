const mainSecTwo = document.querySelector(".main-sec-two");
const mainPar = document.querySelector(".main-par");
const slideUps = document.querySelectorAll(".block-cols");
const expBtn = document.querySelector(".exp-btn");
const expContainer = document.querySelector(".exp-container");
const workItem = document.querySelectorAll(".work-item");
const headingContainer = document.querySelector(".heading-container");
const heading = document.querySelector(".heading");
const footerUps = document.querySelectorAll(".footer-node");

const paragraphOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-50px",
};

const expBtnOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-20px",
};

const workItemOptions = {
  root: null,
  threshold: 0.2,
  rootMargin: "0px",
};

const headingOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-20px",
};

const paragraphObserver = new IntersectionObserver(
  (entries, paragraphObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        mainPar.classList.add("show-par");
        paragraphObserver.unobserve(entry.target);
      }
    });
  },
  paragraphOptions
);

paragraphObserver.observe(mainSecTwo);

const extObserver = new IntersectionObserver((entries, extObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("show-par");
      extObserver.unobserve(entry.target);
    }
  });
}, paragraphOptions);

slideUps.forEach((slider) => {
  extObserver.observe(slider);
});

const expBtnObserver = new IntersectionObserver((entries, extObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("show-par");
      expBtnObserver.unobserve(entry.target);
    }
  });
}, expBtnOptions);

expBtnObserver.observe(expContainer);

const workItemObserver = new IntersectionObserver((entries, extObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("show-par");
      workItemObserver.unobserve(entry.target);
    }
  });
}, workItemOptions);

workItem.forEach((item) => {
  workItemObserver.observe(item);
});

const headingObserver = new IntersectionObserver((entries, extObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("show-par");
      headingObserver.unobserve(entry.target);
    }
  });
}, headingOptions);

headingObserver.observe(headingContainer);

const footerObserver = new IntersectionObserver((entries, extObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("show-par");
      footerObserver.unobserve(entry.target);
    }
  });
}, paragraphOptions);

footerUps.forEach((slider) => {
  footerObserver.observe(slider);
});
