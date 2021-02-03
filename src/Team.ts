//Stores stats for a team
class Team {
    teamName: string;
    wins: number = 0;
    draws: number = 0;
    losses: number = 0;
    goalsFor: number = 0;
    goalsAgainst: number = 0;

    constructor(teamName: string) {
        this.teamName = teamName;
    }

    goalDifference: () => number = () => this.goalsFor - this.goalsAgainst;

    points: () => number = () => (this.wins * 3) + this.draws;
}

export default Team;