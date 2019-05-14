import { LitElement, html } from 'lit-element';
import './src/components/movie-detail.js';
import './src/components/list-items.js';
import './src/components/item-not-found.js';
import './src/components/header-component.js';
import './src/components/no-match.js';
import api from './src/api.js';
import { installRouter } from 'pwa-helpers/router.js';

const { getFilmsByName } = api();

class MovieSearchApp extends LitElement {
  static get properties() {
    return {
      fillName: { type: String },
      films: { type: Array },
      fetchSuccess: { type: Boolean },
      route: { type: String },
      query: { type: String }
    };
  }

  constructor() {
    super();
    this.films = [];
    this.fetchSuccess = true;
    installRouter((location) => {
      this.films = [];
      this.route = location.pathname;
      this.queryId = location.search.substr(4);
    });
  }

  render() {
    return html`
      <header-component @search-performed=${this._findFilm} .route=${this.route}></header-component>
      ${this.currentRoute}
      `;
  }

  get currentRoute() {
    switch(this.route) {
    case '/':
      return html`
      ${this.fetchSuccess ?
    html`<list-items .films=${this.films}></list-items>`
    : html`<item-not-found></item-not-found>`}`;
    case '/movie':
      return html`<movie-detail .filmId=${this.queryId}></movie-detail>`;
    default:
      return html`<no-match></no-match>`;
    }
  }

  _findFilm(evt) {
    getFilmsByName(evt.detail)
      .then((res) => {
        if(res === 'False') {
          this.fetchSuccess = false;
          this.films = [];
        } else {
          this.films = res;
        }
      });
  }
}

customElements.define('movie-search-app', MovieSearchApp);
