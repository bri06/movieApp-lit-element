import { LitElement, html, css } from 'lit-element';

class NoMatch extends LitElement {

  static get styles() {
    return css `
      .not-found-layout {
        background-color: #73d0f4;
        border-radius: 8px;
        text-align: center;
        margin: 10px;
        padding: 5px 0;
      }

      .not-found-layout h1 {
        font-size: 5rem;
        margin: 0;
      }

      .not-found-layout p {
        font-size: 2rem;
      }
    `;
  }

  render() {
    return html`
      <div class="not-found-layout">
        <h1>404</h1>
        <p>Not Found</p>
      </div>
    `;
  }

}

customElements.define('no-match', NoMatch);