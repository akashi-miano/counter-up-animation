const nums = document.querySelectorAll(".nums");
nums.forEach((num) => {
  num.innerText = "0";
  const updateCounter = () => {
    const target = +num.getAttribute("data-num");
    const c = +num.innerText;
    const increment = target / 200;
    if (c < target) {
      num.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      num.innerText = target;
    }
  };
  updateCounter();
});
