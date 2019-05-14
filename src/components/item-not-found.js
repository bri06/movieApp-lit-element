import { LitElement, html, css } from 'lit-element';

class ItemNotFound extends LitElement {

  static get styles() {
    return css `
      .error-msg {
        color: #D8000C;
        background-color: #FFD2D2;
        padding: 12px;
      }
    `;
  }

  constructor() {
    super();
    this.text = 'Movie not found';
  }

  render() {
    return html`
      <h3 class="error-msg">
        ${this.text}
      </h3>
    `;
  }
}

customElements.define('item-not-found', ItemNotFound);