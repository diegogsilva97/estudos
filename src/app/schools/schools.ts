import { Component } from '@angular/core';
import { SchoolComponent } from '../school/school.component';
import { FormsModule } from '@angular/forms';
import { NgIf, NgForOf } from '@angular/common';


@Component({
  selector: 'app-schools',
 imports: [SchoolComponent, FormsModule, NgIf, NgForOf],
  templateUrl: './schools.html',
  styleUrl: './schools.css',
})
export class Schools {
aceitaNovaEscola = false;
createdSchoolsStatus = "Nenhuma escola criada";
scholName = "Nome de teste";
schoolCreated = false;
schools = ['Escola 1','Escola 2'];


ngOnInit(): void {
setTimeout(() => {
  this.aceitaNovaEscola = true;
}, 3000);
}

createdSchool () {
  this.createdSchoolsStatus = "Escola foi criada";
  this.schoolCreated = true;
  this.schools.push(this.scholName);
}

updateSchoolName(event: any) {
  console.log(event);
 this.scholName = (<HTMLInputElement>event.target).value;
}

}
