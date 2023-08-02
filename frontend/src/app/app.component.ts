import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'url-shortener';
  url: string = '';
  shortUrl: string = '';  // Declare shortURL

  constructor(private http: HttpClient) {}  // Inject HttpClient

  shortenURL() {
    this.http.post('/api/shorten', {url: this.url}).subscribe(
      (data: any) => {
        this.shortUrl = data.shortUrl;

        console.log(data);
      },
      (error) => {
        console.error('Request failed with error ', error);
      }
    );
  }
}