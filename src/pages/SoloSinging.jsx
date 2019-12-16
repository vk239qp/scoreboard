import React from 'react';
import ScoreCard from '../component/ScoreCard';
import Leaderboard from '../component/Leaderboard';
import firebase from '../utils/firebase';
import mountFunction from './ComponentMount';

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      event: 'SOLO_SINGING',
      question: [],
    };
  }

  componentDidMount() {
    const dataRef = firebase.database().ref(`${this.state.event}/JUDGES`);
    mountFunction(this.state, dataRef);
  }

  render() {
    return (
      <div className="main-page">
        <div className="ranking">
          <Leaderboard event_name={this.state.event} />
        </div>
        <div className="main">
          <div className="event-box-main">
            <div id="event-text">{this.state.event}</div>
          </div>
          <div className="web-header">
            <div className="web-title1">ECCENTRICA</div>
            <div className="web-title2">3.0</div>
          </div>
          <div id="scores">
            <div id="card-title">JUDGE SCORES</div>
            <div className="card-vertical">
              <div id="card-container1">
                {this.state.data.map(item => {
                  return <ScoreCard judge={item.judge_id} score={item.score} />;
                })}
              </div>
              <div id="card-container2">
                {this.state.question.map(item => {
                  return <ScoreCard judge={item.judge_id} score={item.score} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
