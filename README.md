# Welome to FIKA!

The homely social platform to get people communicating again!
FIKA allows users to interact via an instant messaging service amongst their colleagues. When users sign up, they will be given a choice to go to the chatroom, or select a game to play depending on their preference and number of players. The game rooms will also include a local chat for players to talk amongst themselves.  Our aim is to bridge the gap that Covid has created by reigniting social interactions, recreating the “coffee break” experience of the office, from home.



## MVP

* To create a full stack app, with user authentication.
* Socketed Tic Tac Toe game limited to players in game.
* 60% test coverage
* Admin portal for organisations

## Snippets

https://github.com/georgeo23/reactchat





## Design specs

![Image of Figma](https://github.com/shewitt93/FIKA---Final-Project/blob/master/Screenshot%202020-09-24%20at%2019.55.45.png)

## Schema

![Image of Figma](https://github.com/shewitt93/FIKA---Final-Project/blob/master/Schema.png)

## User running instructions
1. go to 'wesbite'
2. register
3. login
4. explore!


### User story

User Story: Our user will be a worker/recently redundant employee(this could also be used as a social space to network) who wishes to socialise with their work colleagues but no longer gets the opportunity due to Covid. Our space lets them once again interact with their colleagues, firstly they can register to the website then login through our secure page. He will then be taken to the home page where they will be greeted with a welcome and their last login date. He can then choose which game to play or to go to the chat room to talk with their friends. Currently they will be able to play tiktactoe, with the ability to choose their marker against another player in real time! Afterwards they can choose to keep playing, go to home or logout securely!

## Dev running instruction

To run the repo code:

1. Fork and clone this repo
2. cd into repo
3. Install requirements
   - `pip install -r requirements.txt`
4. pipenv shell and start server
   - `pipenv shell`
   - `python manage.py runserver`
5. start react app
  -`CD into fikafe`
  -`npm install`
  -`npm start`
6. create psql table called fika
-`createruser --superuser postgres`
- `python manage.py makemigrations`
- `python manage.py migrate`
7. for websocket chat and game cd into fikafe/server
- `run node index.js`

### This app uses

1. React, Redux
2. Django REST framework
3. PostgreSQL
4. Socket.io

## Process and Roadmap

-  Created Figma and schemas. Created Django backend with authencation and created user models 
-  Created react fromend and connected it to backend with form validation for authentication login
-  added chat and games with websockets

## Challenges

- Learning and integrating Websocket
- Deploying multiple servers


## Future features

-  More Games
-  More user features
-  More fun!

## License

- [MIT License](https://opensource.org/licenses/mit-license.php)

### to add




➽ Documentation along with examples of what you’ve built or code snippets




➽ Demo & Current Build Status

