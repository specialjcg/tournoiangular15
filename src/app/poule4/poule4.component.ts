import {Component, Input} from '@angular/core';
import {Team} from "../domain/team";

@Component({
  selector: 'app-poule4',
  templateUrl: './poule4.component.html',
  styleUrls: ['./poule4.component.scss']
})
export class Poule4Component {
  @Input() team :Team[]=[]
  @Input() poule :number = 0
  match:number[][]=[[0,0],[0,0],[0,0],[0,0],[0,0]]
  score0: number=0;

  constructor() {



  }
  ngOnInit() {
  }

  affiche(team:Team) {
    if (team) return team.name
    return '';
  }

  addresult() {

  }

  formatCompteur() {
    return {width:'3rem',height:'10px', 'font-size':'15px'}
  }

}
