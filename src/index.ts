import Ranker from './Ranker'
import * as data from './matches.json';

//Get match data

const ranker = new Ranker();

console.log(ranker.rankTeams(data));



