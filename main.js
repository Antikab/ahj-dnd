/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/ContentBoard.js
class ContentBoard {
  constructor() {
    this.createContentBoard();
  }
  createContentBoard() {
    const body = document.querySelector('body');
    const contentBoard = document.createElement('div');
    contentBoard.className = 'content-board';
    body.append(contentBoard);
    const taskBoard = document.createElement('main');
    taskBoard.className = 'task-board';
    contentBoard.append(taskBoard);
  }
}
;// CONCATENATED MODULE: ./src/js/TaskColumns.js
class TaskColumns {
  constructor() {
    this.createTaskColumns();
  }
  createTaskColumns() {
    const taskBoard = document.querySelector('.task-board');
    const toDoColumn = document.createElement('section');
    toDoColumn.className = 'to-do column dropable';
    taskBoard.append(toDoColumn);
    const inProgressColumn = document.createElement('section');
    inProgressColumn.className = 'in-progress column dropable';
    taskBoard.append(inProgressColumn);
    const doneColumn = document.createElement('section');
    doneColumn.className = 'done column dropable';
    taskBoard.append(doneColumn);
    const columnHeaderToDo = document.createElement('header');
    toDoColumn.append(columnHeaderToDo);
    const columnHeaderInProgress = document.createElement('header');
    inProgressColumn.append(columnHeaderInProgress);
    const columnHeaderDone = document.createElement('header');
    doneColumn.append(columnHeaderDone);
    const columnFooterToDo = document.createElement('footer');
    columnFooterToDo.className = 'footer to-do';
    toDoColumn.append(columnFooterToDo);
    const addCardToDo = document.createElement('p');
    addCardToDo.className = 'add-card-button';
    columnFooterToDo.append(addCardToDo);
    addCardToDo.textContent = '✙ Add another card';
    const columnFooterinProgress = document.createElement('footer');
    columnFooterinProgress.className = 'footer in-progess';
    inProgressColumn.append(columnFooterinProgress);
    const addCardInProgress = document.createElement('p');
    addCardInProgress.className = 'add-card-button';
    columnFooterinProgress.append(addCardInProgress);
    addCardInProgress.textContent = '✙ Add another card';
    const columnFooterDone = document.createElement('footer');
    columnFooterDone.className = 'footer done';
    doneColumn.append(columnFooterDone);
    const addCardDone = document.createElement('p');
    addCardDone.className = 'add-card-button';
    columnFooterDone.append(addCardDone);
    addCardDone.textContent = '✙ Add another card';
    const titleToDo = document.createElement('p');
    const contextButtonToDo = document.createElement('div');
    contextButtonToDo.classList = 'column-header-button';
    contextButtonToDo.textContent = '\u22EF';
    columnHeaderToDo.append(titleToDo);
    titleToDo.textContent = 'todo';
    columnHeaderToDo.append(contextButtonToDo);
    const titleInProgress = document.createElement('p');
    const contextButtonInProgress = document.createElement('div');
    contextButtonInProgress.classList = 'column-header-button';
    contextButtonInProgress.textContent = '\u22EF';
    columnHeaderInProgress.append(titleInProgress);
    titleInProgress.textContent = 'in progress';
    columnHeaderInProgress.append(contextButtonInProgress);
    const titleDone = document.createElement('p');
    const contextButtonDone = document.createElement('div');
    contextButtonDone.classList = 'column-header-button';
    contextButtonDone.textContent = '\u22EF';
    columnHeaderDone.append(titleDone);
    titleDone.textContent = 'done';
    columnHeaderDone.append(contextButtonDone);
  }
}
;// CONCATENATED MODULE: ./src/js/AddNewCardWidget.js
class AddNewCardWidget {
  static createNewCardWidget(className) {
    const targetColumn = document.querySelector(`.${className}`);
    const targetColumnFooter = document.querySelector(`.${className} footer`);
    targetColumnFooter.style.display = 'none';
    const newCardWidget = document.createElement('div');
    newCardWidget.className = 'new-card-widget';
    targetColumn.append(newCardWidget);
    const newCardText = document.createElement('textarea');
    newCardText.className = 'new-card-text';
    newCardText.setAttribute('placeholder', 'Please describe the task...');
    newCardText.setAttribute('rows', '3');
    const newCardWidgetFooter = document.createElement('footer');
    newCardWidgetFooter.className = 'new-card-widget-footer';
    newCardWidget.append(newCardText);
    newCardWidget.append(newCardWidgetFooter);
    const addButton = document.createElement('button');
    addButton.className = 'add-button';
    addButton.textContent = 'Add card';
    newCardWidgetFooter.append(addButton);
    const widgetFooterBlock = document.createElement('div');
    widgetFooterBlock.classList = 'widget-footer-block';
    newCardWidgetFooter.append(widgetFooterBlock);
    const newCardWidgetClose = document.createElement('p');
    newCardWidgetClose.classList = 'card-widget-close';
    newCardWidgetClose.textContent = '✖';
    const newCardWidgetContext = document.createElement('p');
    newCardWidgetContext.classList = 'card-widget-context';
    newCardWidgetContext.textContent = '\u22EF';
    widgetFooterBlock.append(newCardWidgetClose);
    widgetFooterBlock.append(newCardWidgetContext);
  }
}
;// CONCATENATED MODULE: ./src/js/CardCreator.js
class CardCreator {
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
;// CONCATENATED MODULE: ./src/js/Popuper.js
class Popuper {
  static chargePopUp(element) {
    const hint = document.createElement('div');
    hint.className = 'widget-hint';
    const hintContent = document.createElement('p');
    hintContent.className = 'widget-hint-content';
    hintContent.textContent = 'Sorry! Not available now. Stay tune!';
    hint.append(hintContent);
    document.body.appendChild(hint);
    const {
      top,
      left
    } = element.getBoundingClientRect();
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
;// CONCATENATED MODULE: ./src/js/Rotate.js
class Rotate {
  static setRotation(event, element, torotate) {
    const leftMotionForce = event.clientX - element.getBoundingClientRect().left;
    const rightMotionForce = element.getBoundingClientRect().right - event.clientX;
    if (leftMotionForce >= rightMotionForce) {
      torotate.classList.add('rotate-left');
    } else {
      torotate.classList.add('rotate-right');
    }
  }
}
;// CONCATENATED MODULE: ./src/js/Engine.js
/* eslint-disable guard-for-in */
/* eslint-disable no-shadow */




class Engine {
  constructor() {
    this.reconstruction();
    this.clickEvents();
    this.dragEvents();
  }
  clickEvents() {
    const taskBoard = document.querySelector('.task-board');
    taskBoard.addEventListener('click', event => {
      if (event.target.classList.contains('add-card-button')) {
        if (document.querySelector('.new-card-widget')) {
          this.closeOldWidget();
        }
        const targetColumn = event.target.closest('.column');
        const classList = targetColumn.className.split(' ');
        AddNewCardWidget.createNewCardWidget(classList[0]);
      } else if (event.target.classList.contains('card-widget-close')) {
        this.closeOldWidget();
      } else if (event.target.classList.contains('add-button')) {
        const targetColumn = event.target.closest('.column');
        const classList = targetColumn.className.split(' ');
        const content = document.querySelector('.new-card-text').value;
        CardCreator.createNewCard(classList[0], content);
        this.closeOldWidget();
        this.saveData();
      } else if (event.target.classList.contains('card-close')) {
        const targetCard = event.target.closest('.card-window');
        targetCard.remove();
        this.saveData();
      } else if (event.target.classList.contains('column-header-button')) {
        Popuper.chargePopUp(event.target);
      } else if (event.target.classList.contains('card-widget-context')) {
        Popuper.chargePopUp(event.target);
      }
    });
  }
  dragEvents() {
    let dragged = null;
    let ghosted = null;
    let securePlace = null;
    const board = document.querySelector('.task-board');
    board.addEventListener('mousedown', event => {
      if (!event.target.classList.contains('card-window')) {
        return;
      }
      // eslint-disable-next-line func-names
      event.target.ondragstart = function () {
        return false;
      };
      this.removePointerEvents();
      dragged = event.target;
      ghosted = event.target.cloneNode(true);
      securePlace = event.target.cloneNode(true);
      securePlace.style.opacity = '0';
      const shiftX = event.clientX - dragged.getBoundingClientRect().left + board.getBoundingClientRect().left;
      const shiftY = event.clientY - dragged.getBoundingClientRect().top + board.getBoundingClientRect().top;
      ghosted.classList.add('dragged');
      ghosted.style.pointerEvents = 'none';
      ghosted.style.position = 'absolute';
      ghosted.style.zIndex = '9';
      ghosted.style.cursor = 'grabbing';
      ghosted.classList.add('size-fixed');
      const fixHeight = `${dragged.offsetHeight}px`;
      const fixWidth = `${dragged.offsetWidth}px`;
      ghosted.style.setProperty('--element-height', fixHeight);
      ghosted.style.setProperty('--element-width', fixWidth);
      dragged.classList.add('invisible');
      document.body.appendChild(ghosted);
      ghosted.style.left = `${event.pageX - shiftX}px`;
      ghosted.style.top = `${event.pageY - shiftY}px`;
      Rotate.setRotation(event, dragged, ghosted);
      board.addEventListener('mousemove', event => {
        event.preventDefault();
        if (!dragged) {
          return;
        }
        ghosted.style.left = `${event.pageX - shiftX}px`;
        ghosted.style.top = `${event.pageY - shiftY}px`;
        const closest = document.elementFromPoint(event.clientX, event.clientY);
        if (closest.classList.contains('moveable')) {
          closest.closest('.column').insertBefore(securePlace, closest);
          securePlace.addEventListener('mouseleave', event => {
            event.target.remove();
          });
        } else if (closest.tagName === 'HEADER') {
          closest.after(securePlace);
          securePlace.addEventListener('mouseleave', event => {
            event.target.remove();
          });
        } else if (closest.tagName === 'FOOTER') {
          closest.closest('.column').insertBefore(securePlace, closest);
          securePlace.addEventListener('mouseleave', event => {
            event.target.remove();
          });
        }
      });
      board.addEventListener('mouseleave', () => {
        if (!dragged) {
          return;
        }
        dragged.classList.remove('invisible');
        document.body.removeChild(ghosted);
        ghosted = null;
        dragged = null;
      });
    });
    board.addEventListener('mouseup', event => {
      if (!dragged) {
        return;
      }
      const closest = document.elementFromPoint(event.clientX, event.clientY);
      let needToBeHidden;
      const parentOfTheClosest = closest.closest('.dropable');
      if (closest.classList.contains('moveable')) {
        const closestTop = closest.getBoundingClientRect().top;
        const ghostedTop = ghosted.getBoundingClientRect().top;
        if (closestTop >= ghostedTop) {
          parentOfTheClosest.insertBefore(dragged, closest);
        } else {
          closest.after(dragged);
        }
        needToBeHidden = closest.querySelector('.card-close');
        needToBeHidden.style.display = 'none';
      } else if (!closest.classList.contains('moveable')) {
        if (closest.tagName === 'HEADER') {
          closest.after(dragged);
        } else if (closest.tagName === 'FOOTER') {
          parentOfTheClosest.insertBefore(dragged, parentOfTheClosest.lastChild);
        } else if (closest.tagName === 'SECTION') {
          closest.firstChild.after(dragged);
        }
      } else {
        return;
      }
      if (securePlace) {
        securePlace.remove();
      }
      this.restorePointerEvents();
      dragged.classList.remove('invisible');
      document.body.removeChild(ghosted);
      ghosted = null;
      dragged = null;
      this.saveData();
    });
  }
  saveData() {
    localStorage.removeItem('check-list data');
    const toDoColumn = document.querySelector('.to-do');
    const inProgressColumn = document.querySelector('.in-progress');
    const doneColumn = document.querySelector('.done');
    const toDoItems = toDoColumn.querySelectorAll('.card-window');
    let toDoItemsArr = null;
    if (toDoItems) {
      toDoItemsArr = [...toDoItems];
    }
    const inProgressItems = inProgressColumn.querySelectorAll('.card-window');
    let inProgressItemsArr = null;
    if (inProgressItems) {
      inProgressItemsArr = [...inProgressItems];
    }
    const doneItems = doneColumn.querySelectorAll('.card-window');
    let doneItemsArr = null;
    if (doneItems) {
      doneItemsArr = [...doneItems];
    }
    const toDoData = {};
    if (toDoItemsArr) {
      toDoItemsArr.forEach((item, index) => {
        toDoData[index] = item.innerText;
      });
    }
    const inProgressData = {};
    if (inProgressItemsArr) {
      inProgressItemsArr.forEach((item, index) => {
        inProgressData[index] = item.innerText;
      });
    }
    const doneData = {};
    if (doneItemsArr) {
      doneItemsArr.forEach((item, index) => {
        doneData[index] = item.innerText;
      });
    }
    const saveData = {
      'to-do': toDoData,
      'in-progress': inProgressData,
      done: doneData
    };
    localStorage.setItem('check-list data', JSON.stringify(saveData));
  }
  reconstruction() {
    if (localStorage.getItem('check-list data')) {
      const loadData = JSON.parse(localStorage.getItem('check-list data'));
      if (Object.keys(loadData['to-do']).length !== 0) {
        for (const key in loadData['to-do']) {
          CardCreator.createNewCard('to-do', loadData['to-do'][key]);
        }
      }
      if (Object.keys(loadData['in-progress']).length !== 0) {
        for (const key in loadData['in-progress']) {
          CardCreator.createNewCard('in-progress', loadData['in-progress'][key]);
        }
      }
      if (Object.keys(loadData.done).length !== 0) {
        for (const key in loadData.done) {
          CardCreator.createNewCard('done', loadData.done[key]);
        }
      }
    }
  }
  closeOldWidget() {
    const oldWidget = document.querySelector('.new-card-widget');
    const targetColumn = oldWidget.closest('.column');
    targetColumn.querySelector('footer').style.display = 'block';
    oldWidget.remove();
  }
  removePointerEvents() {
    const columnHeaderParagraphs = [...document.querySelectorAll('.column header p')];
    columnHeaderParagraphs.forEach(item => {
      item.style.pointerEvents = 'none';
    });
    const columnHeaderDivs = [...document.querySelectorAll('.column header div')];
    columnHeaderDivs.forEach(item => {
      item.style.pointerEvents = 'none';
    });
    const columnFooterParagraphs = [...document.querySelectorAll('.column footer p')];
    columnFooterParagraphs.forEach(item => {
      item.style.pointerEvents = 'none';
    });
    const cardCloses = [...document.querySelectorAll('.card-close')];
    cardCloses.forEach(item => {
      item.style.pointerEvents = 'none';
    });
  }
  restorePointerEvents() {
    const columnHeaderParagraphs = [...document.querySelectorAll('.column header p')];
    columnHeaderParagraphs.forEach(item => {
      item.style.pointerEvents = 'auto';
    });
    const columnHeaderDivs = [...document.querySelectorAll('.column header div')];
    columnHeaderDivs.forEach(item => {
      item.style.pointerEvents = 'auto';
    });
    const columnFooterParagraphs = [...document.querySelectorAll('.column footer p')];
    columnFooterParagraphs.forEach(item => {
      item.style.pointerEvents = 'auto';
    });
    const cardCloses = [...document.querySelectorAll('.card-close')];
    cardCloses.forEach(item => {
      item.style.pointerEvents = 'auto';
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js




// eslint-disable-next-line no-new
new ContentBoard();
// eslint-disable-next-line no-new
new TaskColumns();
// eslint-disable-next-line no-new, eol-last
new Engine();
;// CONCATENATED MODULE: ./src/index.js



// entry point for webpack
// don't write your code here
/******/ })()
;