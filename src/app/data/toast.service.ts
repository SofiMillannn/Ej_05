import {inject, Injectable} from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toastCtrl:ToastController = inject(ToastController);

  constructor() { }

 async mostrarToast(msg:string) {

  const toast = await this.toastCtrl.create({

    message: msg, duration: 2000,color:"success",position:"bottom"
  });

  await toast.present();

  }

}
