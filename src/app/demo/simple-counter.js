(function() {
  const template = document.createElement('template');

  template.innerHTML = `

    <div>
      <button type="button" incr>+</button>
      <span></span>
      <button type="button" decr>-</button>
    </div>
  `;

  class SimpleCounter extends HTMLElement {
    constructor() {
      super();

      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      this.incrementBtn = this.shadowRoot.querySelector('[incr]');
      this.decrementBtn = this.shadowRoot.querySelector('[decr]');
      this.displayVal = this.shadowRoot.querySelector('span');

      this.maxReached = new CustomEvent('maxReached');
      this.minReached = new CustomEvent('minReached');
    }

    connectedCallback() {
      this.incrementBtn.addEventListener('click', this.increment);
      this.decrementBtn.addEventListener('click', this.decrement);

      if (!this.hasAttribute('value')) {
        this.setAttribute('value', 1);
      }
    }

    increment() {
      const step = +this.step || 1;
      const newValue = +this.value + step;

      if (this.max) {
        if (newValue > +this.max) {
          this.value = +this.max;
          this.dispatchEvent(this.maxReached);
        } else {
          this.value = +newValue;
        }
      } else {
        this.value = +newValue;
      }
    }

    decrement() {
      const step = +this.step || 1;
      const newValue = +this.value - step;

      if (this.min) {
        if (newValue < +this.min) {
          this.value = +this.min;
          this.dispatchEvent(this.minReached);
        } else {
          this.value = +newValue;
        }
      } else {
        this.value = +newValue;
      }
    }

    static get observedAttributes() {
      return ['value'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      this.displayVal.innerText = this.value;
    }

    get value() {
      return this.getAttribute('value');
    }

    get step() {
      return this.getAttribute('step');
    }

    get min() {
      return this.getAttribute('min');
    }

    get max() {
      return this.getAttribute('max');
    }

    set value(newValue) {
      this.setAttribute('value', newValue);
    }

    set step(newValue) {
      this.setAttribute('step', newValue);
    }

    set min(newValue) {
      this.setAttribute('min', newValue);
    }

    set max(newValue) {
      this.setAttribute('max', newValue);
    }

    disconnectedCallback() {
      this.incrementBtn.removeEventListener('click', this.increment);
      this.decrementBtn.removeEventListener('click', this.decrement);
    }
  }

  window.customElements.define('simple-counter', SimpleCounter);
})();
