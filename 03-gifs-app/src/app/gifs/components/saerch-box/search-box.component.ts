import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input
  type="text"
  class="form-control"
  placeholder="Search for gifs...">`
})

export class SearchBoxComponent  {
  constructor() { }

}
