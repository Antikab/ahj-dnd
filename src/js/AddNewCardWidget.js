export default class AddNewCardWidget {
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
