import Team from './Team';

let teamDict: { [name: string]: Team } = {};

export const rankTeams: (data: any) => Array<any> = (data) => {
    //Create dictionary that stores teams
    teamDict = {};

    //Loop through data to tally scores store in dictionary
    fillDictionary(data);

    console.log(teamDict);

    //Put values of dictionary in array

    //Sort array using custom compare function
    return ['return'];
}

const fillDictionary: (data: any) => void = (data) => {
    for (const round of data.rounds) {
        for (const match of round.matches) {
            const team1: Team = getTeam(match.team1);
            const team2: Team = getTeam(match.team2);

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

const getTeam: (teamName: string) => Team = (teamName) => {
    if (!teamDict[teamName]) {
        teamDict[teamName] = new Team(teamName);
    }
    return teamDict[teamName];
};

export default rankTeams;