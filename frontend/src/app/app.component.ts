import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
interface ShortenResponse {
  originalUrl: string;
  shortUrl: string;
}

export class AppComponent {
  title = 'url-shortener';
  url = '';
  shortUrl = '';

  constructor(private http: HttpClient) {}

  shortenURL(): void {
    if (!this.url) {
      return;
    }

    this.http.post<ShortenResponse>('/api/shorten', { url: this.url }).subscribe({
      next: (data) => {
        this.shortUrl = data.shortUrl;
      },
      error: (err) => {
        console.error('Request failed with error', err);
      }
    });
  }
}