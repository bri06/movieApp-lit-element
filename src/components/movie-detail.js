import { LitElement, html, css } from 'lit-element';
import api from '../api.js';
const { getFilmDetail } = api();

class MovieDetail extends LitElement {

  static get styles() {
    return css `
      .movie-detail {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
      }

      .detail-container {
        display: flex;
        width: 310px;
        flex-direction: column;
        align-items: center;
        border: .2px #d6d6d6 solid;
        padding: 15px 10px;
        box-shadow: 3px 3px 13px -1px rgba(0, 0, 0, 0.54);
        margin-bottom: 15px;
      }
      .movie-title {
        font-size: 1.3rem;
        font-family: 'Roboto', sans-serif;
      }

      .detail-image {
        height: 350px;
        width: 250px;
      }
    `;
  }

  static get properties() {
    return {
      filmId: { type: String },
      filmDetail: { type: Object },
      imageNotFound: { type: String }
    };
  }

  constructor(){
    super();
    this.filmDetail = {};
    this.imageNotFound = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
  }

  render() {
    return html`
      <div class="movie-detail">
        <h1 class="movie-title">${this.filmDetail.Title} - <i>${this.filmDetail.Year}</i></h1>
        <div class="detail-container">
          <img class="detail-image" src="${this.filmDetail.Poster !== 'N/A' ? this.filmDetail.Poster : this.imageNotFound }" />
          <div class="detail-description">
            <h4>Description: </h4>
            <p>${this.filmDetail.Plot}</p>
            <div class="info-movie">
              <h4>Genre:</h4>
              <p>${this.filmDetail.Genre}</p>
              <h4>Director:</h4>
              <p>${this.filmDetail.Director}</p>
            </div>
            <div className="companies">
              <h4>Producer: </h4>
              <p>${this.filmDetail.Production}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    getFilmDetail(this.filmId)
      .then((res) => this.filmDetail = res);
  }

}

customElements.define('movie-detail', MovieDetail);