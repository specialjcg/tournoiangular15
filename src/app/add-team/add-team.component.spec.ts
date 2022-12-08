import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamComponent } from './add-team.component';
import {Team} from "../domain/team";
import {addTeam} from "../domain/addteam";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";


const createPool = (teams: Team[], poule: number): Team[][] => {
  const pool:Team[][]=[]
  if (poule==4){
    for (let i=0; i<teams.length; i+=poule) {

      pool.push( [teams[i], teams[i+1], teams[i+2], teams[i+3]])}}
  else if (poule==3){
    for (let i=0; i<teams.length; i+=poule) {
      if (teams[i+2]!==undefined) pool.push( [teams[i], teams[i+1], teams[i+2]])
      else  pool.push( [teams[i], teams[i+1]])


    }}
  else {
    for (let i=0; i<teams.length; i+=2) {

      pool.push( [teams[i], teams[i+1]])}
  }
  return pool
};
describe('AddTeamComponent', () => {
  let component: AddTeamComponent;
  let fixture: ComponentFixture<AddTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeamComponent ],
      imports: [
        BrowserModule,
        AppRoutingModule,

        BrowserAnimationsModule,
        FormsModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add a team', function () {
    const team: Team = { name: 'bad boy', score: [] };
    const teams: Team[] = [];
    addTeam(teams, team);
    expect(teams[0].name).toEqual('bad boy');
  });

  it('should create poule of teams automatic of four team', function () {
    const teams: Team[] = [];
    for (let i = 0; i < 8; i++) {
      let team: Team = { name: 'bad boy' + i, score: [] };
      addTeam(teams, team);
    }
    const pools: Team[][] = createPool(teams, 4);
    expect(pools[0]).toEqual( [{"name": "bad boy0", "score": []}, {"name": "bad boy1", "score": []}, {"name": "bad boy2", "score": []}, {"name": "bad boy3", "score": []}]);
    expect(pools[1]).toEqual( [{"name": "bad boy4", "score": []}, {"name": "bad boy5", "score": []}, {"name": "bad boy6", "score": []}, {"name": "bad boy7", "score": []}]);
  });
  it('should create poule of teams automatic of three team', function () {
    const teams: Team[] = [];
    for (let i = 0; i < 8; i++) {
      let team: Team = { name: 'bad boy' + i, score: [] };
      addTeam(teams, team);
    }
    const pools: Team[][] = createPool(teams, 3);
    expect(pools[0]).toEqual( [{"name": "bad boy0", "score": []}, {"name": "bad boy1", "score": []}, {"name": "bad boy2", "score": []}]);
    expect(pools[1]).toEqual( [ {"name": "bad boy3", "score": []},{"name": "bad boy4", "score": []}, {"name": "bad boy5", "score": []}]);
    expect(pools[2]).toEqual( [ {"name": "bad boy6", "score": []}, {"name": "bad boy7", "score": []}]);
  });
});
