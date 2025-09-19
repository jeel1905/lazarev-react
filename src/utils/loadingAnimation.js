import gsap from 'gsap';

function loadingAnimation() {
  const tl = gsap.timeline();

  // 1. Start hidden and transformed
  tl.set("#page1", {
    opacity: 0,
    scaleX: 0.7,
    scaleY: 0.2,
    y: "80%",
    borderRadius: "150px",
    transformOrigin: "center"
  });

  // 2. Fade in & transform
  tl.to("#page1", {
    opacity: 1,
    duration: 0.3
  });

  tl.to("#page1", {
    scaleX: 1,
    scaleY: 1,
    y: "0%",
    borderRadius: "0px",
    duration: 2,
    ease: "expo.out"
  });

  // 3. Show navbar
  tl.from("nav", {
    opacity: 0,
    duration: 0.5
  }, "-=1.5");

  // 4. Fade in page1 children
  tl.from("#page1 h1, #page1 p, #page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
  }, "-=1");

  // 5. Clear all styles to restore full visibility and prevent weird leftovers
  tl.set("#page1", {
    clearProps: "all"
  });
}
export { loadingAnimation };
