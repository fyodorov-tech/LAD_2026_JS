export class Task {
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.createdDate = new Date();
  }
}
