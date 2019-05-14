import { LitElement, html, css } from 'lit-element';
import './bri-button.js';

class HeaderComponent extends LitElement {

  static get styles() {
    return css `
      .search-container {
        background-color: #143484;
        padding: 10px 0;
        height: 50px;
        display: flex;
        justify-content: space-between;
      }
      .logo {
        width: 40px;
        height: 40px;
        margin-left: 10px;
      }

      .inputSearch {
        background: transparent;
        border: none;
        width: 210px;
        outline: 0px;
        font-family: 'Roboto', sans-serif;
        color: white;
      }
      ::placeholder {
        color: #FFF;
      }

      input:focus::-webkit-input-placeholder {
        color: transparent;
      }

      .disabled {
        display: none;
      }

      .enabled {
        display: flex;
        width: 70%;
        margin-right: 5px;
        background: rgba(255, 255, 255, 0.23);
        padding: 8px 5px;
        border-radius: 8px;
      }
    `;
  }

  static get properties() {
    return {
      films: { type: Array },
      disabled: { type: Boolean },
      route: { type: String }
    };
  }

  constructor(){
    super();
    this.films = [];
  }

  render() {
    return html`
      <div class="search-container">
        <a href="/"><img class="logo" src="../../src/assets/video-camera.png" alt="logo"></a>
        <div class="${this.route !== '/' ? 'disabled' : 'enabled'}">
          <input class="inputSearch" id="inputSearch" @keypress="${this._keyUpSearch}" placeholder="Type to search a movie...">
          <bri-button @click="${this._doSearch}">Search</bri-button>
        </div>
      </div>
    `;
  }

  get inputValue() {
    return this.shadowRoot.querySelector('#inputSearch').value;
  }

  _doSearch() {
    this.dispatchEvent(new CustomEvent('search-performed', {
      detail: this.inputValue
    }));
  }

  _keyUpSearch(e) {
    if (e.keyCode == 13 && !!this.inputValue.length) {
      this._doSearch();
    }
  }

}

customElements.define('header-component', HeaderComponent);