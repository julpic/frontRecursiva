import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent implements OnInit {
  selectedFiles: any = [];
  constructor(private _fileService: FileService) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    console.log(event);
    const file = event.target.files[0];
    this.selectedFiles.push({ FileName: file.name, file });
    console.log(this.selectedFiles);
  }

  sendFiles() {
    this._fileService.sendFiles(this.selectedFiles).subscribe(
      (res) => {
        console.log(res);
        alert('Se ha procesado el archivo con éxito!');
      },
      (error) => {
        alert('Ha ocurrido un error, intentalo más tarde');
      }
    );
  }
}
