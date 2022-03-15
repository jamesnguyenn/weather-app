export function toastError(message, element) {
  const template = `
    <div class="toast-wrapper" style="background-color: red;position:absolute; width:200px; top:0; right:0; margin: 8px; padding: 10px 20px; border-radius:10px; z-index:1000000; font-size:14px; display:flex; align-items:center; justify-content:flex-start">${message}</div>
    `;

  element.insertAdjacentHTML("afterbegin", template);

  return setTimeout(() => {
    element.firstElementChild.remove();
  }, 1500);
}
