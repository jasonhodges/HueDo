import { Component } from '@angular/core';
import { LightsService } from './services/lights.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'HueDo';

  constructor(private lightsService: LightsService) { }
  
  // getLights() {
  //   this.lightsService.getLights();
  // }

  toggleOn(id: number) {
    this.lightsService.toggleOn(id).subscribe();
  }

  toggleOff(id: number) {
    this.lightsService.toggleOff(id).subscribe();
  }
}
