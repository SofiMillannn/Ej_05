import {Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonChip,
  IonButton,
  IonBadge
} from '@ionic/angular/standalone';
import {DataService} from "../data/data.service";
import {Description, Root} from "../common/interfaz";
import {ToastController} from "@ionic/angular";
import {ToastService} from "../data/toast.service";
import {NgIf} from "@angular/common";



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonIcon, IonAvatar, IonGrid, IonRow, IonCol, IonText, IonImg, IonCard, NgIf, IonCardHeader, IonCardContent, IonChip, IonButton, IonBadge],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit{
  selectedMovie: any = null;
  showCard: boolean = false;
  private dataservice: DataService = inject(DataService);
  componentesShadow: Description[] = []
  componentesLight: Description[] = []
  api!:Root;
  globalArray: Description[] = []
  private readonly _toastService: ToastService = inject(ToastService);
  constructor() {}

  ngOnInit() {

    }
//shadow
  protected cargarComponentesShadow() {
    this.dataservice.getShadowMovies().subscribe(
      {
        next: value => {
          this.globalArray = value.description;
        },
        error: error => {console.log(error);},
        complete: () => {this._toastService.mostrarToast("Datos cargados Shadow")}
      }
    );
  }

  protected cargarComponentesLight() {
    this.dataservice.getLightMovies().subscribe(
      {
        next:value => {
          this.globalArray = value.description;
        },
        error: error => {console.log(error);},
        complete:() => { this._toastService.mostrarToast("Datos cargados Light")  }
      }
    );
  }


  infoPeli(img: string, title: string, year: number, aka: string, rank: number) {

    this.selectedMovie = {
      img,title,year,aka,rank
    }
  }
}
