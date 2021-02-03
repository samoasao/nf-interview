import Team from './Team';

class Ranker {

    private teamDict: { [name: string]: Team } = {};

    rankTeams: (data: any) => Array<any> = (data) => {
        //Create dictionary that stores teams
        this.teamDict = {};

        //Loop through data to tally scores store in dictionary
        this.fillDictionary(data);

        //Put values of dictionary in array
        //Sort array using custom compare function
        const rankedTeams:Array<Team> = this.getRankedList();

        const finalResults: Array<any> = rankedTeams.map((team, index) => {
            return {
                rank: index + 1,
                teamName: team.teamName,
                wins: team.wins,
                draws: team.draws,
                losses: team.losses,
                goalsFor: team.goalsFor,
                goalsAgainst: team.goalsAgainst,
                goalDifference: team.goalDifference(),
                points: team.points()
            }
        });

        return finalResults;
    }

    private compareTeams: (a: Team, b: Team) => number = (a, b) => {
        if (b.points() - a.points() != 0) {
            return b.points() - a.points();
        }
        else if (b.goalDifference() - a.goalDifference() != 0) {
            return b.goalDifference() - a.goalDifference();
        }
        else {
            return b.goalsFor - a.goalsFor;
        }
    };

    private getRankedList: () => Array<Team> = () => {
        const rankedList: Array<Team> = [];
        for (const name in this.teamDict) {
            rankedList.push(this.teamDict[name]);
        }

        return rankedList.sort(this.compareTeams);

    };

    private fillDictionary: (data: any) => void = (data) => {
        for (const round of data.rounds) {
            for (const match of round.matches) {
                const team1: Team = this.getTeam(match.team1);
                const team2: Team = this.getTeam(match.team2);

                const team1Goals: number = match.score.ft[0];
                const team2Goals: number = match.score.ft[1];

                team1.goalsFor += team1Goals;
                team1.goalsAgainst += team2Goals;

                team2.goalsFor += team2Goals;
                team2.goalsAgainst += team1Goals;

                if (team1Goals > team2Goals) {
                    team1.wins++;
                    team2.losses++;
                }
                else if (team1Goals < team2Goals) {
                    team1.losses++;
                    team2.wins++;
                }
                else {
                    team1.draws++;
                    team2.draws++;
                }
            }
        }
    }

    private getTeam: (teamName: string) => Team = (teamName) => {
        if (!this.teamDict[teamName]) {
            this.teamDict[teamName] = new Team(teamName);
        }
        return this.teamDict[teamName];
    };

}

export default Ranker;