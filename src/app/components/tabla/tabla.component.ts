import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  dataPersonas: any = [];
  displayedColumns: string[] = ['nombre', 'edad', 'clubDeportivo'];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private _fileService: FileService) {}

  ngOnInit(): void {}

  getDatosPersonas(opcion: any) {
    switch (opcion) {
      case 1:
        this._fileService.getTotalRecords().subscribe(
          (res) => alert(`Hay en total ${res} personas registradas`),
          (error) => {
            alert(`Ha ocurrido un error. Intentalo de nuevo más tarde`);
            console.log(error);
          }
        );
        break;
      case 3:
        this._fileService.marriedAndUniversity().subscribe(
          (res) => {
            this.displayedColumns = ['nombre', 'edad', 'equipo'];
            this.dataPersonas = res;
          },
          (error) => {
            alert(`Ha ocurrido un error. Intentalo de nuevo más tarde`);
            console.log(error);
          }
        );
        break;
    }
  }
}
