class main extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="alcohol-section">
      <h1 class="judul">Alcohol</h1>
      <div class="drinks-wrapper" id="alcoholSection">
        <div class="drinks-element">
          <div class="overview" id="info">
            <h1>API GAGAL DIPANGGIL</h1>
          </div>
        </div>
      </div>
    </section>

    
    <section id="nonalcohol-section">
    <h1 class="judul">Non Alcohol</h1>
      <div class="drinks-wrapper" id="nonalcoholSection">
        <div class="drinks-element">
          <div class="overview" id="info">
            <h1>API GAGAL DIPANGGIL</h1>
          </div>
        </div>
      </div>
    </section>
      `;
  }
}

customElements.define('main-section', main);
