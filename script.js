document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    // Toggle expand/collapse when clicking the box (except on dropdowns)
    box.addEventListener("click", () => {
      boxes.forEach((b) => {
        if (b !== box) {
          b.classList.remove("expanded");
        }
      });
      box.classList.toggle("expanded");
    });

    const selects = box.querySelectorAll("select");

    selects.forEach((select) => {
     
      select.addEventListener("click", (e) => {
        e.stopPropagation();
      });

      
      select.addEventListener("change", () => {
        const selectedColor = box.querySelector('select:nth-of-type(1)').value.toLowerCase();
        const selectedSize = box.querySelector('select:nth-of-type(2)').value.toLowerCase();

        box.classList.remove("dynamic-red", "dynamic-blue", "dynamic-green");
        box.classList.remove("size-small", "size-medium", "size-large");

        box.classList.add(`dynamic-${selectedColor}`);
        box.classList.add(`size-${selectedSize}`);
      });
    });
  });
});
