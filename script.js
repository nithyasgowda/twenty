function navSlider() {
  const navPanel = document.querySelector("#nav_panel");
  const wrapper = document.querySelector("#wrapper");
  document.getElementById("burger").addEventListener("click", function () {
    const isOpen = navPanel.classList.contains("slide-in");
    navPanel.classList.toggle("slide-in", !isOpen);
    navPanel.classList.toggle("slide-out", isOpen);
    wrapper.classList.toggle("nav-open");
    this.style.transform = isOpen ? "translateX(0)" : "translateX(280px)";
  });
}
navSlider();
