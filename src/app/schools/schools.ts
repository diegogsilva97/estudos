import { Component } from '@angular/core';
import { SchoolComponent } from '../school/school.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-schools',
 imports: [SchoolComponent, FormsModule,NgIf],
  templateUrl: './schools.html',
  styleUrl: './schools.css',
})
export class Schools {
aceitaNovaEscola = false;
createdSchoolsStatus = "Nenhuma escola criada";
scholName = "Nome de teste";
schoolCreated = false;


ngOnInit(): void {
setTimeout(() => {
  this.aceitaNovaEscola = true;
}, 3000);
}

createdSchool () {
  this.createdSchoolsStatus = "Escola foi criada";
  this.schoolCreated = true;
}

updateSchoolName(event: any) {
  console.log(event);
 this.scholName = (<HTMLInputElement>event.target).value;
}

}
