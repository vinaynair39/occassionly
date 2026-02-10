class FocusManager {
  constructor() {
    this.previous = null;
  }

  trap(selector) {
    this.previous = document.activeElement;
    const target = document.querySelector(selector);
    if (target) {
      target.focus();
    }
  }

  restore() {
    if (this.previous && this.previous.focus) {
      this.previous.focus();
    }
    this.previous = null;
  }
}

export default FocusManager;
