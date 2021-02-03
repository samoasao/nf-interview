import Team from './Team';

export const rankTeams: (data: any) => Array<any> = (data) => {
    //Create dictionary that stores teams
    const teamDict: { [name: string]: Team } = {};

    console.log(teamDict);

    getTeam("Testing", teamDict);

    console.log(teamDict);

    //Loop through data to tally scores store in dictionary

    //Put values of dictionary in array

    //Sort array using custom compare function
    return ['return'];
}

const getTeam: (teamName: string, teamDict:{ [name: string]: Team }) => Team = (teamName, teamDict) => {
    if (!teamDict[teamName]) {
        teamDict[teamName] = new Team(teamName);
    }
    return teamDict[teamName];
};

export default rankTeams;