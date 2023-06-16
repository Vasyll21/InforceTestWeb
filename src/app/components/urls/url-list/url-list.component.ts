import { Component, OnInit } from '@angular/core';
import { ShortUrl } from 'src/app/models/short-url.model';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit{

  urls: ShortUrl[] =[];
  constructor(private urlService: UrlsService) {}

  ngOnInit(): void {
     this.urlService.getAllUrls()
     .subscribe({
      next: (allUrls) => {
        this.urls = allUrls;
      },
      error: (responce) => {
        console.log(responce);
      }
     });
  }
}
