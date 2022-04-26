import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private urlapi = 'https://localhost:7204/api/Personas';

  constructor(private httpClient: HttpClient) {}

  sendFiles(files: any): Observable<any> {
    const fileData = new FormData();
    for (const file of files) {
      fileData.append(file.FileName, file);
    }
    console.log(fileData);
    //{headers: { "Content-Type": "multipart/form-data" }}

    return this.httpClient.post(this.urlapi + '/upload', fileData, {
      headers: { Accept: 'application/json' },
    });
  }

  getTotalRecords() {
    return this.httpClient.get(this.urlapi + '/opcion1');
  }

  marriedAndUniversity() {
    return this.httpClient.get(this.urlapi + '/opcion3');
  }
}
