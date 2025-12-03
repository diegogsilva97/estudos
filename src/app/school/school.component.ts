import { Component } from "@angular/core";

@Component({
  selector: 'app-school',
  imports: [],
  templateUrl: './school.component.html',
  })
export class SchoolComponent  {
  schoolid = 100;
  schoolNome = 'Exemplo escolas';
  nomeFunc = 'Outro nome'

getNomeEscola(){
  return this.nomeFunc;
}

}
