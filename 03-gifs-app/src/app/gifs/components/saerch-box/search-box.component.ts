import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input
  hola type="text"
  class="form-control"
  placeholder="Search for gifs..."
  (keyup.enter)="serchTag()"
  #txtTagImput
  > `})
export class SearchBoxComponent  {
  @ViewChild('txtTagImput')
 public tagImput !:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService ) { }

  serchTag(){
    const newTag =this.tagImput.nativeElement.value
    this.gifsService.serchTag( newTag);
    this.tagImput.nativeElement.value = '';
  }

}
