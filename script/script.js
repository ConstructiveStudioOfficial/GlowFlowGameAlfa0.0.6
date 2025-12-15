"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const modalContent = document.getElementById("license-modal");
  const agreeCheckbox = document.getElementById("license-agree");
  const confirm = document.getElementById("license-confirm");
  if (!localStorage.getItem("license-accepted")) {
    modalContent.style.display = "flex";
    modalContent.style.opacity = "1";
  }
  agreeCheckbox.addEventListener("change", function () {
    if (this.checked) {
      confirm.disabled = false;
      confirm.style.background = "black";
      confirm.style.color = "white";
    } else {
      confirm.disabled = true;
      confirm.style.background = "darkgrey";
      confirm.style.color = "#eee";
    }
  });
  confirm.addEventListener("click", function () {
    if (agreeCheckbox.checked) {
      modalContent.style.opacity = "0";
      setTimeout(function () {
        modalContent.style.display = "none";
        document.body.style.overflow = "auto";
      }, 500);
      localStorage.setItem("license-accepted", "true");
    }
  });
});
const interactiveUI = new Audio("audio/interactiveUI.mp3");
function playinteractiveUIEffect() {
  interactiveUI.currentTime = 0;
  interactiveUI.play();
  navigator.vibrate(50);
}
const licenseAgree = document.getElementById("license-agree");
licenseAgree.addEventListener("click", () => {
  playinteractiveUIEffect();
});
const licenseConfirm = document.getElementById("license-confirm");
licenseConfirm.addEventListener("click", () => {
  playinteractiveUIEffect();
});
const aaa = document.getElementById("???");
aaa.addEventListener("click", () => {
  playinteractiveUIEffect();
});
const bbb = document.getElementById("play");
bbb.addEventListener("click", () => {
  playinteractiveUIEffect();
});
const ccc = document.getElementById("shop");
ccc.addEventListener("click", () => {
  playinteractiveUIEffect();
});
