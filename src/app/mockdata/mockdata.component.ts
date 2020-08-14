import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mockdata',
  templateUrl: './mockdata.component.html',
  styleUrls: ['./mockdata.component.scss']
})
export class MockdataComponent implements OnInit {

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

  ngOnInit(): void {
    for (let index = 0; index < 40; index++) {
      let paramId = index;
      const charLength = 10;
      this.requestData(paramId, charLength);
    };
    console.log(this.mockData);
  }

}
