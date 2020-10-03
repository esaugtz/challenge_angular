import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { PetitionGet, Api } from './petition-get';

const apiUrl = 'https://api.siclo.com/api/v2/plus/instructors/?page_size=10';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  /**
   * Peticion Get.
   * Puede recibir Headers personalizados, o inyectar los definidos por default.
   * @param peticion de tipo PeticionGet
   */
  getPetition(petition: PetitionGet): Promise <any> {
    const headersPeticion = petition.headers ? new HttpHeaders(petition.headers) : new HttpHeaders(
      {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    );
    const promisePetitionGet = new Promise((resolve, reject) => {
      this.http.get(petition.path, { headers: headersPeticion }).subscribe(okResponse => {
        resolve(okResponse);
      }, error => {
        reject(error);
      });
    });
    return promisePetitionGet;
  }

}
