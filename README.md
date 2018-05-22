<!-- Testing Code Ship -->

# Pixel Pet

PixelPet provides adorable, animated WebVR pets through A-Frame that can chat with their owner and respond to commands. It integrates the Watson Assistant and Tone Analyzer APIs and maintains custom entities and context variables. This enables emotionally responsive conversations between the user and their PixelPet, as well as providing different personality options and the ability for the pet to learn about its owner. In addition to accepting text input, PixelPet uses the Web Speech API to allow users to talk to their pets directly.

The inspiration behind this app is the idea that, despite being surrounded by increasingly powerful and intelligent virtual assistants, comparatively little has been done to make these assistants companionable.  They provide a great deal of logistical support to their users, but next to no emotional support. As machine learning continues to improve, it would be ideal if the virtual personalities in our lives were not only useful, but likeable and empathetic.

# Deployment

## Intsall Tech Stack / Dependencies

Everything you need can be acquired by running `npm install`

PixelPet uses the following API's and libraries:

- Material UI
- Web Speech API
- A-Frame
- React
- Redux
- Passport
- IBM's Watson Assistant & Watson Tone Analyzer
- Sequelize
- PostgreSQL
- Express.js
- Node.js
- Webpack

## Build & run

You will need a PostgreSQL database, which you can create with `createdb pixel-pet`

There is also a seed script you can run with `npm run seed`

`npm run start:dev` will run Webpack and start the server listening on `localhost:8080` and will watch the project for changes. 

# Usage

## Interacting with PixelPet

Here are some fun things to try with your PixelPet: 
- Speak!
- Sit!
- Ask PixelPet what it thinks about the PixelPet application
- Tell PixelPet you're sad
- Tell PixelPet you're scared
- Tell PixelPet you're angry
- Tell PixelPet you're happy
- Tell PixelPet your favorite food... then ask it later if it remembers!
- Ask PixelPet where it's from
- Ask PixelPet to tell a joke
- General conversation
- Explore PixelPet's environment with the arrow keys

## Compatibility

*At this time, PixelPet's speech-to-text depends on the Web Speech API, which is currently only supported by Chrome.*
