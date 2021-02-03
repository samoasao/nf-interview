import Ranker from './Ranker'
import * as data from './matches.json';

const ranker = new Ranker();

console.log(ranker.rankTeams(data));



