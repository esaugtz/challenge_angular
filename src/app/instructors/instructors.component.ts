import { Component, OnInit } from '@angular/core';
import { MainService } from '../core/main.service';
import { PetitionGet } from '../core/petition-get';
import { Links } from '../core/links';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.sass']
})
export class InstructorsComponent implements OnInit {

  public links: Links;
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
      const links: Links = response.data.links;
      this.links = links;
      this.instructors = response.data.results;
    });    
  }

  movePage(path, dir) {
    console.log(path);
    const url = path[dir].split('//')[1];
    console.log(url);
    let clearLinks: Links;
    this.links = clearLinks;
    this.instructors = [];
    this.getInstructors(`https://${url}`);
  }

}
