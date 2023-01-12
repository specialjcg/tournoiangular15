import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Team} from "../domain/team";

@Component({
  selector: 'app-poule3',
  templateUrl: './poule.component.html',
  styleUrls: ['./poule.component.scss']
})
export class PouleComponent implements OnInit{
@Input() team :Team[]=[]
@Input() poule :number = 0
  @Input() poules :number[] = []
  match:number[][]=[[0,0,0],[0,0,0],[0,0,0]]
  matches:number[][] = [[0,1],[1,2],[0,2]]
  score0: number=0;
  public score: {team1:Team,team2:Team}[] = [];

  constructor(private cdr:ChangeDetectorRef) {



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

  formatCompteur() {
    return {'font-size':'12px'}
  }
  getClass(i: number) {
    return "div" + i
  }

  encour(i:number) {
if (this.match[i][2]===0) this.match[i][2]=1
else{ this.match[i][2]=0}
this.cdr.detectChanges()
  }

  getFormatdiv(i:number) {

    return  this.match[i][2]===0 ? "formatDiv" : "formatDivencour"
  }

  validMatch(i: number, item: number[]) {
    this.score.push({team1: {name:this.team[item[0]].name,score:[this.match[i][0]]}, team2: {name:this.team[item[1]].name,score:[this.match[i][1]]}})
  }

  afficheteam(team: {team1:Team,team2:Team}):string {
    return team.team1.name+"/"+team.team2.name+"="+team.team1.score+"/"+team.team2.score
  }
}
