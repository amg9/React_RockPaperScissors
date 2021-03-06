import React from 'react';
import './App.css';
import Choice from './Choice';
import rock from "./images/rock.png";
import paper from "./images/paper.png";
import scissors from "./images/scissors.png";

class App extends React.Component {
  state = {
    choices: [ "rock", "paper", "scissors"],
    userChoice: "",
    compChoice: "",
    wins: 0,
    losses: 0,
    ties: 0,
  };

  choose = (choice) => {
    this.setState({ 
      choices: this.state.choices,  
      userChoice: choice, 
      compChoice: this.state.compChoice, 
      wins: this.state.wins,
      losses: this.state.losses,
      ties: this.state.ties,
    });
  };

  chosenImg = (choice) => {
    switch (choice) {
      case "rock": return rock;
      case "paper": return paper;
      case "scissors": return scissors;
    }
  };

  setCompChoice = () => {
    var choice = this.state.choices[Math.floor(Math.random() * 3)];
    this.setState({ 
      choices: this.state.choices,  
      userChoice: this.state.userChoice, 
      compChoice: choice,
      wins: this.state.wins,
      losses: this.state.losses,
      ties: this.state.ties,
    });
  };

  win = () => {
    this.setState({ 
      choices: this.state.choices,  
      userChoice: this.state.userChoice, 
      compChoice: this.state.choice,
      wins: (this.state.wins + 1),
      losses: this.state.losses,
      ties: this.state.ties,
    });
    alert("You win!")
  }

  lose = () => {
    this.setState({ 
      choices: this.state.choices,  
      userChoice: this.state.userChoice, 
      compChoice: this.state.choice,
      wins: this.state.wins,
      losses: (this.state.losses + 1),
      ties: this.state.ties,
    });
    alert("You lose!")
  }

  result = () => {
    switch(this.state.userChoice) {
      case this.state.compChoice:
        this.setState({ 
          choices: this.state.choices,  
          userChoice: this.state.userChoice, 
          compChoice: this.state.choice,
          wins: this.state.wins,
          losses: this.state.losses,
          ties: (this.state.ties + 1),
        });
        alert("It's a tie!");
        break;
      case "rock":
        if (this.state.compChoice === "scissors") {
          this.win();
        } else {
          this.lose();
        }
        break;
      case "paper":
          if (this.state.compChoice === "rock") {
            this.win();
          } else {
            this.lose();
          }
        break;
      case "scissors":
          if (this.state.compChoice === "paper") {
            this.win();   
          } else {
            this.lose();
          }
        break;
      default:
        alert("something went wrong");
    }
  }

  play = () => {
    if (this.state.userChoice != "") {
      this.setCompChoice();
      setTimeout(() => this.result(), 1000)
    } else {
      alert("Please make a choice")
    }
  };

  render() {
    return (
      <div>
        <h1>Rock Paper Scissors</h1>
        <h3>Make your choice:</h3>
        <div>
          <Choice name="rock" img={rock} choose={this.choose} />
          <Choice name="paper" img={paper} choose={this.choose} />
          <Choice name="scissors" img={scissors} choose={this.choose} />
        </div>
        <div className="flex">
          <div>
            <h2>You:</h2>
            <Choice name={this.state.userChoice} img={this.chosenImg(this.state.userChoice)} />
          </div>
          <h3>VS</h3>
          <div>
            <h2>Computer:</h2>
            <Choice name={this.state.compChoice} img={this.chosenImg(this.state.compChoice)} />
          </div>
        </div>
        <button onClick={() => this.play()}>Shoot</button>
        <div className="flex">
          <div>
            Wins: {this.state.wins}
          </div>
          <div>
            Losses: {this.state.losses}
          </div>
          <div>
            Ties: {this.state.ties}
          </div>
        </div>
      </div>
    )
  }
};

export default App;
