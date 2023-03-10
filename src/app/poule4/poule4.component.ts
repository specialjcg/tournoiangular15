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
  @Input() poules :number[] = []
  match:number[][]=[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
  matches:number[][] = [[0,1],[2,3],[0,2],[1,3],[0,3],[1,2]]
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
  getClass(i: number) {
    return "div" + i
  }
  formatCompteur() {
    return {width:'3rem',height:'10px', 'font-size':'15px'}
  }

}
