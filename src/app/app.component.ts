import { Component } from '@angular/core';
import {ColorService} from './color.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Color Demo';
  public colors;

  ngOnInit() {
    this.getColors();
  }


  getColors() {
    this._colorService.getColors().subscribe(
      data => { this.colors = data},
      err => console.error(err),
      () => console.log('done loading colors')
    );
  }

  constructor(private _colorService: ColorService) { }
}
