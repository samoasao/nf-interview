# nf-interview - NF Coaching Developer Take-Home Skills Test

## Table of contents
* [General info](#general-info)
* [Setup](#setup)

## General info
This project is the take-home skills test for the coaching developer position at Nerd Fitness. Thank you for taking the time to consider me! The function that parses and sorts the data is in Ranker.ts. I wrote it as a class to group its 'helper functions' together and to keep them private. I had to look up what was meant by 'points' to find out that a win was 3 points and a draw was 1. I also wasn't sure if you wanted me to copy the data as I did or if you wanted me to fetch it from the address. For simplicity, I just copied the data, but I can very quickly and easily make the adjustment to fetch it, if you would like. 

I validated my output by looking over it carefully to be sure it was adding and sorting correctly, and then just to be sure I compared it with the actaul Premier league stats from 2016-2017. This was fun! Thanks for the opportunity! 
	
## Setup
There are no node_modules to install but to run this typescript project, it must be first be built:

```
$ cd ../nf-interview
$ npm run build
$ npm start
```

Or you can build and run with the command: 

```
$ npm run dev
```

