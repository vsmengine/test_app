import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockdataService {

  constructor(private http: HttpClient) { }

  mockData = [];

  randomText(length: Number) {
    let resultText = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      resultText += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return resultText;
  }

  requestData(paramId: Number, length: Number) {
    this.http.get(`https://picsum.photos/id/${paramId}/info`).subscribe((value) => {
      this.mockData.push({
        'id': paramId,
        'photo': value['download_url'],
        'author': value['author'],
        'text': this.randomText(length),
      });
    });
  }
  
}
