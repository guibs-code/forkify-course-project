class SearchView {
  #parentEl = document.querySelector('.search');
  #searchInput = this.#parentEl.querySelector('.search__field');

  getQuery() {
    const query = this.#searchInput.value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this.#searchInput.value = '';
  }

  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
