import { Component } from '@angular/core';
import { Formation } from './model/formation';

//import model

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twc';

  //decarration et init  user us= [ //remplissage avec des sessions]
  //sauvegard sur localStorage


  
localStorage.setItem ('Formation', JSON.stringify(Formation));



Formation = JSON.parse(localStorage.getItem('Formation'));

}
