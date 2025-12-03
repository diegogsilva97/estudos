import { Component } from '@angular/core';
import { SchoolComponent } from '../school/school.component';


@Component({
  selector: 'app-schools',
 imports: [SchoolComponent],
  templateUrl: './schools.html',
  styleUrl: './schools.css',
})
export class Schools {
aceitaNovaEscola = false;
createdSchoolsStatus = "Nenhuma escola criada";

ngOnInit(): void {
setTimeout(() => {
  this.aceitaNovaEscola = true;
}, 3000);
}



}
