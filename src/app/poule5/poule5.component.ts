import {Component, Input} from '@angular/core';
import {Team} from "../domain/team";

@Component({
  selector: 'app-poule5',
  templateUrl: './poule5.component.html',
  styleUrls: ['./poule5.component.scss']
})
export class Poule5Component {
  @Input() team :Team[]=[]
  @Input() poule :number = 0
  @Input() poules :number[] = []
  match:number[][]=[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
  score0: number=0;

  constructor() {



  }
  ngOnInit() {
  }

  affiche(pouleaff:number) {
    let index = 0
    for (let i = 0; i < this.poule; i++) {

      index = index + this.poules[i]
    }
    if (this.team[index+pouleaff]) return this.team[index+pouleaff].name
    return '';
  }

  addresult() {

  }

  formatCompteur() {
    return {width:'3rem',height:'10px', 'font-size':'15px'}
  }

}
