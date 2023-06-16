import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShortUrl } from 'src/app/models/short-url.model';
import { User } from 'src/app/models/user.model';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-edit-url',
  templateUrl: './edit-url.component.html',
  styleUrls: ['./edit-url.component.css']
})
export class EditUrlComponent implements OnInit{

  user: User = {
    id: "",
    username: "",
    passwordHash: "",
    role: ""
  }
  url: ShortUrl = {
    id: "",
    url: "",
    short: "",
    creationDate: new Date(),
    user: this.user
  };

  constructor(private router: Router, private route: ActivatedRoute, private urlsService: UrlsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id) {
          this.urlsService.getUrl(id)
          .subscribe({
            next: (response) => {
              this.url = response
            }
          })
        }
      }
    })
  }

  updateUrl() {
    this.urlsService.updateUrl(this.url.id, this.url)
    .subscribe({
      next: (responce) => {
        this.router.navigate(["urls"]);
      }
    });
  }
}
