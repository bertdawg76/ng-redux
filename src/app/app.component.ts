import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import {IAppState} from "./store";
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  @select('counter') count;

  constructor(private ngRedux: NgRedux<IAppState>) {

  }
  increment(){
      //this.counter++;
      this.ngRedux.dispatch({type: INCREMENT})
  }
}
