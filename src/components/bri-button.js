import { LitElement, html, css } from 'lit-element';

class BriButton extends LitElement {

  static get styles() {
    return css `
    .button {
      position: relative;
      cursor: pointer;
      display: inline-block;
      overflow: hidden;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      vertical-align: middle;
      z-index: 1;
      -webkit-transition: .3s ease-out;
      transition: .3s ease-out;
      text-decoration: none;
      text-align: center;
      letter-spacing: .5px;
      -webkit-transition: background-color .2s ease-out;
      transition: background-color .2s ease-out;
      cursor: pointer;
      font-size: 14px;
      outline: 0;
      border: none;
      border-radius: 6px;
      display: inline-block;
      height: auto;
      line-height: 30px;
      padding: 0px 10px;
      text-transform: uppercase;
      background-color: #003cffb7;
      color: white;
    }

    .button:hover,
    .button:visited,
    .button:active {
      background-color: #00aeffa1;
      color: #000;
      top: 1px;
    }
    `;
  }

  render() {
    return html`
      <button class="button">
        <slot></<slot>
      </button>
    `;
  }
}

customElements.define('bri-button', BriButton);
