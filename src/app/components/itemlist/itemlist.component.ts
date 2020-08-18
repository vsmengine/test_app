import { Component, OnInit } from '@angular/core';
import { MockdataService } from '../../services/mockdata.service';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent implements OnInit {

  mockitems = [
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

  //mockitems = [];

  constructor(private mockDataService: MockdataService) { }

  ngOnInit(): void {
    this.mockDataService.mockDataSubject.subscribe((data) => {
        this.mockitems = data;
        console.log(data);
      }
    );
  }

}
