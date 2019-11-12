import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 5';

  drawRectable() {
    var canvas = document.getElementById('stage');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = "#D74022";
      ctx.fillRect(25, 25, 150, 150);

      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.clearRect(60, 60, 120, 120);
      ctx.strokeRect(90, 90, 80, 80);

      ctx.moveTo(0,0);
  ctx.lineTo(200,100);
  ctx.stroke();
    }

  }

}


