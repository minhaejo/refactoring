function orderCoffee(el, orderList) {
  function orderPaint() {
    for (let i = 0; i < orderList.length; i++)
      document.querySelector(
        "#log"
      ).innerHTML += `${orderList[i]}가 완료되었습니다 <br />`;
  }
  function clickHandler() {
    setTimeout(orderPaint, 2000);
  }

  if (!el || !Array.isArray(orderList)) return;
  el.addEventListener("click", clickHandler);
}
orderCoffee(document.querySelector(".button"), ["americano", "cafeLatte"]);
