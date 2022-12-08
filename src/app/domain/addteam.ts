import { Team } from "./team";


export const addTeam = (teams: Team[], teamadd: Team) => {

    teams.push({name:teamadd.name,score:teamadd.score})
    return teams.map(team =>team)
};
