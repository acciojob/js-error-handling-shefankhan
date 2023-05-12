//your code here
class OutOfRangeError extends Error {
	constructor(message) {
    super(message);
    this.name = 'OutOfRangeError';
  }
}

class InvalidExprError extends Error {
	constructor(message) {
    super(message);
    this.name = 'InvalidExprError';
  }
}