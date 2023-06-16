import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddUrlRequest } from 'src/app/models/add-url-request.model';
import { ShortUrl } from 'src/app/models/short-url.model';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.css']
})
export class AddUrlComponent implements OnInit {
  addUrlRequest: AddUrlRequest = {
    url: "",
    username: ""
  }

  constructor(private urlServices: UrlsService, private router: Router) {}

  ngOnInit(): void {
    this.addUrlRequest.username = "user"
  }

  addUrl() {
    this.urlServices.addUrl(this.addUrlRequest)
    .subscribe({
      next: (url) => {
        this.router.navigate(["urls"])
      }

    });
  }
}
