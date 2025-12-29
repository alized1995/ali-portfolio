export function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          obs.unobserve(entry.target); // 🔥 animate once
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach(el => observer.observe(el));
}
