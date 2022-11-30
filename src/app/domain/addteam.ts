import { Team } from "./team";


export const addTeam = (teams: Team[], team: Team) => {
    teams.push({name:team.name,score:team.score});
    return teams
};
