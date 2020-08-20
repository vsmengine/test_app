import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class NewdataService {

  constructor(private http: HttpClient) { }

  newData: Item[] = [];
  newDataSubject = new Subject<Item[]>();


  randomText(length: number) {
    let resultText = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      resultText += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return resultText;
  }

  randomData() {
    const length = 20;
    for (let index = 3000; index < 4000; index++) {
      this.http.get<{[key: string]: string}>(`https://picsum.photos/id/${index}/info`).pipe(
        map((value) => {
          let newItem = {
          'id': index,
          'photo': value['download_url'] ? value['download_url'] : null,
          'author': value['author'] ? value['author'] : null,
          'text': this.randomText(length),
          };
          return newItem;
        })
      ).subscribe({
        next: (value) => {
          this.newData.push(value);
          this.newDataSubject.next(this.newData);
        },
        error: (value) => {
          this.newData.push({
          'id': index,
          'photo': null,
          'author': null,
          'text': this.randomText(length),
          });
          this.newDataSubject.next(this.newData);
        }
      });
    }
  }

}
