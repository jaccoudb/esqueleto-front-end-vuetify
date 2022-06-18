export default class Alert {
  constructor(text = '', type = 'success', open = false) {
    this.text = text;
    this.type = type;
    this.open = open;
  }
}
