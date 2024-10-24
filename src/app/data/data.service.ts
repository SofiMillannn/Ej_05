import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Root} from "../common/interfaz";
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http:HttpClient = inject(HttpClient);
  urlShadow:string = 'https://imdb.iamidiotareyoutoo.com/search?q=shadow';
  urlLight:string = 'https://imdb.iamidiotareyoutoo.com/search?q=light';
  private toastCtrl = ToastController;

getShadowMovies(): Observable<Root> {
  return this.http.get<Root>(this.urlShadow)
}

getLightMovies(): Observable<Root> {
  return this.http.get<Root>(this.urlLight)
}

}
