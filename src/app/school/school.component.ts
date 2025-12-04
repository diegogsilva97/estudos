import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-school',
  imports: [CommonModule],
  templateUrl: './school.component.html',
  styles: [`
    .aberta { color: white}
    `]
  })
export class SchoolComponent  {
  schoolid = 100;
  schoolNome = 'Exemplo escolas';
  nomeFunc = 'Outro nome'

  schoolSituacao = 'aberta';

  constructor(){
    this.schoolSituacao = Math.random() > 0.5 ? 'aberta' : 'fechada'
  }

getNomeEscola(){
  return this.nomeFunc;
}

getStatusCor(){
  return this.schoolSituacao === 'aberta' ? 'green' : 'red';
}

}
