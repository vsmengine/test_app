import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockdataService {

  mockData = [
    {id: 1, photo: "https://picsum.photos/id/1/5616/3744", author: "Alejandro Escamilla", text: "uIv3zzNuszxzXJXZmxt7"},
    {id: 2, photo: "https://picsum.photos/id/0/5616/3744", author: "Alejandro Escamilla", text: "fc8g0QoOsvR182XZaJUU"},
    {id: 3, photo: "https://picsum.photos/id/2/5616/3744", author: "Alejandro Escamilla", text: "pAEBh9vSji9O8MvPeRZ7"},
    {id: 4, photo: "https://picsum.photos/id/4/5616/3744", author: "Alejandro Escamilla", text: "BnteTi9Ky3ynWB17RdYo"},
    {id: 5, photo: "https://picsum.photos/id/3/5616/3744", author: "Alejandro Escamilla", text: "tMm4Tatbhi64lKKorHvf"},
    {id: 6, photo: "https://picsum.photos/id/1/5616/3744", author: "Alejandro Escamilla", text: "uIv3zzNuszxzXJXZmxt7"},
    {id: 7, photo: "https://picsum.photos/id/0/5616/3744", author: "Alejandro Escamilla", text: "fc8g0QoOsvR182XZaJUU"},
    {id: 8, photo: "https://picsum.photos/id/2/5616/3744", author: "Alejandro Escamilla", text: "pAEBh9vSji9O8MvPeRZ7"},
    {id: 9, photo: "https://picsum.photos/id/4/5616/3744", author: "Alejandro Escamilla", text: "BnteTi9Ky3ynWB17RdYo"},
    {id: 10, photo: "https://picsum.photos/id/3/5616/3744", author: "Alejandro Escamilla", text: "tMm4Tatbhi64lKKorHvf"},
    {id: 11, photo: "https://picsum.photos/id/1/5616/3744", author: "Alejandro Escamilla", text: "uIv3zzNuszxzXJXZmxt7"},
    {id: 12, photo: "https://picsum.photos/id/0/5616/3744", author: "Alejandro Escamilla", text: "fc8g0QoOsvR182XZaJUU"},
    {id: 13, photo: "https://picsum.photos/id/2/5616/3744", author: "Alejandro Escamilla", text: "pAEBh9vSji9O8MvPeRZ7"},
    {id: 14, photo: "https://picsum.photos/id/4/5616/3744", author: "Alejandro Escamilla", text: "BnteTi9Ky3ynWB17RdYo"},
    {id: 15, photo: "https://picsum.photos/id/3/5616/3744", author: "Alejandro Escamilla", text: "tMm4Tatbhi64lKKorHvf"},
    {id: 16, photo: "https://picsum.photos/id/1/5616/3744", author: "Alejandro Escamilla", text: "uIv3zzNuszxzXJXZmxt7"},
    {id: 17, photo: "https://picsum.photos/id/0/5616/3744", author: "Alejandro Escamilla", text: "fc8g0QoOsvR182XZaJUU"},
    {id: 18, photo: "https://picsum.photos/id/2/5616/3744", author: "Alejandro Escamilla", text: "pAEBh9vSji9O8MvPeRZ7"},
    {id: 19, photo: "https://picsum.photos/id/4/5616/3744", author: "Alejandro Escamilla", text: "BnteTi9Ky3ynWB17RdYo"},
    {id: 20, photo: "https://picsum.photos/id/3/5616/3744", author: "Alejandro Escamilla", text: "tMm4Tatbhi64lKKorHvf"},
  ];

  index = 0;

  mockDataSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  randomText(length: Number) {
    let resultText = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      resultText += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return resultText;
  }

  requestData() {
    const length = 20;
    for (let j = 0; j < 1; j++) {
      this.http.get(`https://picsum.photos/id/${this.index}/info`).pipe(
        map((value) => {
          let obj = {
          'id': this.index,
          'photo': value['download_url'],
          'author': value['author'],
          'text': this.randomText(length),
          };
          return obj;
        })
      ).subscribe((value) => {
        this.mockData.push(value);
        this.mockDataSubject.next(this.mockData);
      });
      this.index += 1;
    }
    console.log(this.mockData);
  }

  grabData() {
    
  }

}
