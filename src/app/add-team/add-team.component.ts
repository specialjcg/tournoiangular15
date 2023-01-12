import {Component} from '@angular/core';
import {Team} from "../domain/team";
import {addTeam} from "../domain/addteam";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss'],
  providers: [MessageService]
})
export class AddTeamComponent {


  public team: Team = {name: 'Tournoi Team', score: []}
  public teams: Team[] = []
  nameTeam: string = 'essai';
  simplename: Team = {name: '', score: []};
  poule3: boolean = false;
  poule4: boolean = false;
  poulechoice: number = 1;
  poules: number[] = [];


  constructor(private httpClient: HttpClient, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.httpClient.get<Team[]>('http://0.0.0.0:4201/getteams').subscribe(data => this.teams = data)
  }


  chgname(name: string) {

    this.team.name = name
  }

  getClass(i: number) {
    return "div" + i
  }


  moduloTeam(poule: number) {
    if (poule === 3) return Math.round(this.teams.length / poule) + 1
    else return Math.round(this.teams.length / 6) + 1
  }

  delete(teamdel: Team) {
    this.teams = this.teams.filter(team => team.name !== teamdel.name)
    this.httpClient.post('http://0.0.0.0:4201/saveteams', this.teams).subscribe()
  }

  addToteamsGroup() {
    this.team.name.split(";").forEach(teamname => {

      if (this.teams.filter(team => team.name === teamname).length > 0) this.messageService.add({
        severity: 'error',
        summary: 'add team',
        detail: 'team ' + teamname + ' name exist'
      });
      else {
        this.teams = addTeam(this.teams, {name: teamname, score: []})
        this.httpClient.post('http://0.0.0.0:4201/saveteams', this.teams).subscribe()
      }
    })
  }

  test() {
    let colors = ["#ffcbf2ff",
      "#f3c4fbff",
      "#ecbcfdff",
      "#e5b3feff",
      "#e2afffff",
      "#deaaffff",
      "#d8bbffff",
      "#d0d1ffff",
      "#c8e7ffff",
      "#c0fdffff"]
    return "background-color:" + colors[Math.trunc(Math.random() * 10)] + ";"
  }

  test2() {
    let colors = ["#ffcbf2ff",
      "#f3c4fbff",
      "#ecbcfdff",
      "#e5b3feff",
      "#e2afffff",
      "#deaaffff",
      "#d8bbffff",
      "#d0d1ffff",
      "#c8e7ffff",
      "#c0fdffff"]
    return "background-color:" + colors[Math.trunc(Math.random() * 10)] + "; position:relative;top:0px; left:150px"
  }

  validatePool3() {
    this.poule3 = true;
    this.poules = []
    for (let i = 0; i * 3 < this.teams.length-1; i++) {
      const result = this.poules.reduce((accumulator, current) => {
        return accumulator + current;
      }, 0);
      if (this.teams.length-result>6) {
        this.poules.push(3)
      } else {
        this.poules.push(4)
      }
    }
  }
  validatePool4() {
    this.poule3 = true;
    this.poules = []
    for (let i = 0; i * 4 < this.teams.length-1; i++) {
      const result = this.poules.reduce((accumulator, current) => {
        return accumulator + current;
      }, 0);
      if (this.teams.length-result>6) {
        this.poules.push(4)
      } else {
        if (this.teams.length-result<4)
        {this.poules.push(3)}else{
        this.poules.push(5)}
      }
    }
  }

}
