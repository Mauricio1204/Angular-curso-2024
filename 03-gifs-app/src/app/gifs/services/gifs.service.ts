import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() {  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory]
  }

  serchTag(tag: string): void {

    this._tagsHistory.unshift(tag)
  }

}
