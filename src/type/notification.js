export default class Notification {
  constructor(
    title = 'info',
    subtitle = '',
    subtitleParam = null,
    color = 'primary',
    icon = 'mdi-alert-circle-outline ',
    created = new Date()
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.subtitleParam = subtitleParam;
    this.color = color;
    this.icon = icon;
    this.created = created;
  }
}
