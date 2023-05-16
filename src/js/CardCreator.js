export default class CardCreator {
  static createNewCard(className, content) {
    const targetColumn = document.querySelector(`.${className}`);
    const targetColumnFooter = document.querySelector(`.${className} footer`);

    const newCard = document.createElement('p');
    newCard.className = 'card-window moveable';
    targetColumn.append(newCard);

    newCard.textContent = content;
    newCard.style.position = 'relative';

    const newCardClose = document.createElement('div');
    newCardClose.className = 'card-close';
    newCardClose.textContent = '✖';
    newCard.append(newCardClose);
    targetColumnFooter.before(newCard);

    newCard.addEventListener('mouseenter', () => {
      newCard.querySelector('.card-close').style.display = 'block';
    });

    newCard.addEventListener('mouseleave', () => {
      newCard.querySelector('.card-close').style.display = 'none';
    });
  }
}
