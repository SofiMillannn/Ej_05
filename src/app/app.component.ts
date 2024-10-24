import { Component } from '@angular/core';
import {IonApp, IonHeader, IonRouterOutlet} from '@ionic/angular/standalone';
import {register} from "swiper/element/bundle";
import {addIcons} from "ionicons";
import {moon, sunny} from "ionicons/icons";

register()

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonHeader],
})
export class AppComponent {
  constructor() {
    addIcons({moon,sunny})

  }
}
