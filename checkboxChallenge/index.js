const nativeCheckbox = document.querySelector(".native-checkbox");
const customCheckbox = document.querySelector(".custom-checkbox");

nativeCheckbox.addEventListener("change", () => {
  customCheckbox.classList.toggle("checked", nativeCheckbox.checked);
});

customCheckbox.addEventListener("click", () => {
  nativeCheckbox.checked = !nativeCheckbox.checked;
  customCheckbox.classList.toggle("checked", nativeCheckbox.checked);
});

nativeCheckbox.addEventListener(
  "focus",
  () => {
    customCheckbox.classList.add("focus");
  },
  true
);

nativeCheckbox.addEventListener(
  "blur",
  () => {
    customCheckbox.classList.remove("focus");
  },
  true
);

customCheckbox.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    nativeCheckbox.checked = !nativeCheckbox.checked;
    customCheckbox.classList.toggle("checked", nativeCheckbox.checked);
  }
});
