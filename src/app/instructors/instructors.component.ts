import { Component, OnInit } from '@angular/core';
import { MainService } from '../core/main.service';
import { PetitionGet } from '../core/petition-get';


@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.sass']
})
export class InstructorsComponent implements OnInit {

  public data = [];

  constructor(private mainService: MainService,) { }

  ngOnInit(): void {
    this.getInstructors();
  }

  /**
   * Petición Get
   * Puede llevar parámetros para que se reciban en el service
   */
  getInstructors(): void {
    const getInstructors: PetitionGet = {
      petitionName: 'Get Instructors',
      path: '',
      mensaje: 'Cargando instructores'
    }
    this.mainService.getPetition(getInstructors).then(response => {
      console.log(response);
      
    });    
  }

}
