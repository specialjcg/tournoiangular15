import {ChangeDetectorRef, Component} from '@angular/core';
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


  public team:Team={name: 'Tournoi Team',score:[]}
  public teams:Team[] =[]
  nameTeam: string='essai';
  simplename: Team={name: '',score:[]};


  constructor(private httpClient: HttpClient,private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.httpClient.get<Team[]>('http://0.0.0.0:4201/getteams').subscribe(data=>this.teams = data)
  }




  chgname(name: string) {

    this.team.name = name
  }

  getClass(i: number) {
    return "div"+i
  }



  moduloTeam() {
    return Math.round((this.teams.length-1)/3+1)
  }

  delete(teamdel: Team) {
    this.teams=this.teams.filter(team =>team.name !== teamdel.name)
    this.httpClient.post('http://0.0.0.0:4201/saveteams',this.teams).subscribe()
  }

  addToteamsGroup() {
    this.team.name.split(";").forEach(teamname =>{

    if (this.teams.filter(team => team.name===teamname).length>0) this.messageService.add({severity:'error', summary:'add team', detail:'team '+teamname+' name exist'});
    else{
      this.teams=addTeam(this.teams,{name:teamname,score:[]})
      this.httpClient.post('http://0.0.0.0:4201/saveteams',this.teams).subscribe()
  }})
  }

  test() {
    let colors = [
      "#ffb5a7ff",
     "#fcd5ceff",
     "#f8edebff",
     "#f9dcc4ff",
    "#fec89aff"]
    return "background-color:"+colors[Math.trunc(Math.random()*5)]+";"
  }

  validatePool3() {

  }
}
