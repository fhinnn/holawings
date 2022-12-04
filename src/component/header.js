class header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <h1>
          <span><i class="fa-solid fa-champagne-glasses"></i>HolaWings<i class="fa-solid fa-champagne-glasses"></i></span>
        </h1>
        <h2>Temukan Ketenanganmu , Hidup cuman sekali bro :)</h2>
        <div class="nav-links">
          <ul>
            <li><a href="#alcohol-section">Alcohol</a></li>
            <li><a href="#nonalcohol-section">Non Alcohol</a></li>
          </ul>
        </div>
      </nav>
      `;
  }
}

customElements.define('header-bar', header);
