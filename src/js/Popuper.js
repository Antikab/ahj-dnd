export default class Popuper {
  static chargePopUp(element) {
    const hint = document.createElement('div');
    hint.className = 'widget-hint';

    const hintContent = document.createElement('p');
    hintContent.className = 'widget-hint-content';
    hintContent.textContent = 'Sorry! Not available now. Stay tune!';
    hint.append(hintContent);

    document.body.appendChild(hint);
    const { top, left } = element.getBoundingClientRect();
    if (top <= hint.clientHeight) {
      hint.style.top = `${window.scrollY + top + element.clientHeight}px`;
    } else {
      hint.style.top = `${window.scrollY + top - hint.clientHeight}px`;
    }
    hint.style.left = `${window.scrollX + left - (hint.clientWidth - element.clientWidth) / 2}px`;
    setTimeout(() => {
      hint.remove();
    }, 1500);
  }
}
