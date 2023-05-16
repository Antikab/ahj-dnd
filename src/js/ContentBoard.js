export default class ContentBoard {
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
