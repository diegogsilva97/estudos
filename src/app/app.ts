import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SchoolComponent } from './school/school.component'
import { Schools } from './schools/schools';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SchoolComponent,Schools
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
