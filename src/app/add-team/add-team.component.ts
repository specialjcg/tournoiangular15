import { Component } from '@angular/core';
import {Team} from "../domain/team";
import {addTeam} from "../domain/addteam";

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent {


  public team:Team={name: 'Tournoi Team',score:[]}
  public teams:Team[] =[]
  nameTeam: string='';

  constructor() { }

  ngOnInit(): void {

  }


  addToteams() {
    this.teams=addTeam(this.teams,this.team)

  }

  chgname(name: string) {

    this.team.name = name
  }

  getClass(i: number) {
    return "div"+i
  }
}
