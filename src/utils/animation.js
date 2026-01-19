import gsap from "gsap";

export const initMagnetic = () => {
  const magneticElements = document.querySelectorAll(".magnetic");
  magneticElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = el.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      gsap.to(el, { x: x * 0.4, y: y * 0.4, duration: 0.6, ease: "power2.out" });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
    });
  });
};