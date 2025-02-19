# FlashCards Game Kit

## Abstract

To create a game of flashcards played through the command line. Built using ES6 classes and an extensive testing suite.


The opening question. The blue text is your current choice. The arrow keys or typing followed by enter, can be used to choose the answer you want.

<img width="569" alt="Screen Shot 2021-12-02 at 8 51 47 PM" src="https://user-images.githubusercontent.com/88619501/144536957-e01ab908-e74a-4a3b-b9da-0f623e5b1995.png">



The closing statement tells you the round is over and the percentage you had correct.
You can exit the game by pressing crtl + c on a mac.

<img width="571" alt="Screen Shot 2021-12-02 at 8 52 21 PM" src="https://user-images.githubusercontent.com/88619501/144536954-5872c78f-e3ae-4be5-bc91-65bd1560ea10.png">

## Technologies Used

  * VS Code
  * Terminal
  * Github
  * Language
    * Javascript

# Install & Setup Instructions

## Fork This Repo

On the top right corner of this page, click the **Fork** button.

## Setup

Clone down the forked repo (from your GitHub). Since you don't want to name your project "flashcards-starter", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have 5 pending tests in your `Card` test file that show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Node server running on port 3000
```

*Note that you will not need to you run your server until you are instantiating your `Game` class in Iteration 3. Prior to that, you should be using TDD to drive your code. You should check the functionality of your application by running your tests via `npm test`.*


## Where to Add Your Code

### JavaScript

**Create all of your feature code files in the `src` directory.**

We will be using the `module.exports` and `require` syntax to share code across files.

## How to View Your Code in Action

Once you are working through Iteration 3, you will want to start your server to test your functionality.
In the terminal, run:

```bash
node index.js
```

When the game is functioning appropriately, you will be prompted for each question, have the opportunity to select an answer, and will be given feedback. You will be able to play through the entire deck of cards:

![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)

---

## Test Files Organization

Similar to feature code, your test code needs to be put in a specific place for it to run successfully.

**Put all of your test files in the `test` directory.** As a convention, all test filenames should end with `-test.js`. For instance: `Round-test.js`.

## Running Your Tests

Run your test suite using the command:

```bash
npm test
```

The test results will output to the terminal.

---

## Linting Your Code

Run the command in your terminal `npm run lint` to run the linter on your JavaScript code. There will be errors and warnings right from the start in this starter kit - the linter is still running successfully.

Your linter will look at the JavaScript files you have within the `src` directory and the `test` directory. 

---