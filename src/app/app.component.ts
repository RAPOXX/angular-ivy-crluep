import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  body = document.querySelector('body')
  ativo: boolean = false

  changebackground() {
    this.ativo = !this.ativo
    if(this.ativo) {
      this.body.style.background = 'orange'
    }else {
      this.body.style.background = 'green'
    }

  }
}
