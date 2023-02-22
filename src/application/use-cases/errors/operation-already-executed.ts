export class OperationAlreadyExecuted extends Error {
  constructor() {
    super('Operation already executed');
  }
}
