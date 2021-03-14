export class Topic {
  readonly id: string;
  readonly name: string;
  readonly isReadOnly: boolean;

  constructor(id: string, name:string, isReadOnly=false) {
    this.id = id;
    this.name = name;
    this.isReadOnly = isReadOnly;
  }
}
