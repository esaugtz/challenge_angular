import { Component, OnInit } from '@angular/core';
import { MainService } from '../core/main.service';
import { PetitionGet } from '../core/petition-get';


@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.sass']
})
export class InstructorsComponent implements OnInit {

  public links = [];
  public instructors = [];

  constructor(private mainService: MainService,) { }

  ngOnInit(): void {
    this.getInstructors('https://api.siclo.com/api/v2/plus/instructors/?page_size=10');
  }

  /**
   * Petición Get
   * Puede llevar parámetros para que se reciban en el service
   */
  getInstructors(url): void {
    const getInstructors: PetitionGet = {
      petitionName: 'Get Instructors',
      path: url,
      mensaje: 'Cargando instructores'
    }
    this.mainService.getPetition(getInstructors).then(response => {
      console.log(response);
      this.links = response.data.links;
      this.instructors = response.data.results;
    });    
  }

  next(links) {
    console.log(links);
    const path = links.next.split('//')[1];
    console.log(path);
    this.links = [];
    this.instructors = [];
    this.getInstructors(`https://${path}`);
  }

}
