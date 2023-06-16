import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ShortUrl } from '../models/short-url.model';
import { Observable } from 'rxjs';
import { AddUrlRequest } from '../models/add-url-request.model';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllUrls(): Observable<ShortUrl[]> {
    return this.http.get<ShortUrl[]>(this.baseApiUrl + "/api/ShortURL")
  }

  addUrl(addUrlRequest: AddUrlRequest): Observable<AddUrlRequest> {
    return this.http.post<AddUrlRequest>(this.baseApiUrl + "/api/employees", addUrlRequest);
  }

  getUrl(id: string): Observable<ShortUrl> {
    return this.http.get<ShortUrl>(this.baseApiUrl + "/api/employees/" + id)
  }

  updateUrl(id: string, updateUrlRequest: ShortUrl): Observable<ShortUrl> {
    return this.http.put<ShortUrl>(this.baseApiUrl + "/api/employees/" + id, updateUrlRequest);
  }
}
