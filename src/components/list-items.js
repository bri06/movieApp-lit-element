import { LitElement, html, css } from 'lit-element';

class ListItems extends LitElement {

  static get styles() {
    return css `
      :host {
        display: grid;
        grid-template-columns: repeat(auto-fill, 250px);
        justify-content: center;
        grid-gap: 30px;
      }

      .item {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        justify-content: space-between;
        box-shadow: 1px 1px 4px #999;
      }

      .info-item {
        background-color: #f3efef;
        margin: 0;
        padding: 10px;
      }

      .img-container {
        height: 350px;
        width: 250px;
      }

      img {
        height: 100%;
        width: 100%;
        cursor: pointer;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
    `;
  }

  static get properties() {
    return {
      films: { type: Array },
      imageNotFound: { type: String }
    };
  }

  constructor(){
    super();
    this.films = [];
    this.imageNotFound = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
  }

  render() {
    return html`
      ${this.films.map(this._itemsTemplate.bind(this))}
    `;
  }

  _itemsTemplate({ Poster, Title, Year, imdbID }) {
    return html`
    <div class="item">
      <a href="/movie?id=${imdbID}">
        <div class="img-container">
          <img src="${Poster !== 'N/A' ? Poster : this.imageNotFound }" alt="">
        </div>
      </a>
      <div class="info-item">
        <h3>${Title}</h3>
        <article>${Year}</article>
      </div>
    </div>
    `;
  }
}

customElements.define('list-items', ListItems);