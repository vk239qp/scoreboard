import React from 'react';
import ScoreCard from '../component/ScoreCard';
import Leaderboard from '../component/Leaderboard';
import firebase from '../utils/firebase';

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      event: 'POETRY',
      question: [],
    };
  }

  componentDidMount() {
    const dataRef = firebase.database().ref(`${this.state.event}/JUDGES`);
    dataRef.on('value', snapshot => {
      const dataList = [];
      const questionList = [];

      const dataObject = snapshot.val();
      let i = 3;
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const key in dataObject) {
        const singleeObj = {};
        if (i <= 0) {
          singleeObj.judge_id = key;
          singleeObj.score = '?';
          console.log('?');
          questionList.push(singleeObj);
        } else {
          singleeObj.judge_id = key;
          singleeObj.score = dataObject[key];
          console.log(dataObject[key]);
          dataList.push(singleeObj);
        }
        // eslint-disable-next-line no-plusplus
        i--;
      }
      this.setState({
        data: dataList,
        question: questionList,
      });
    });
  }

  render() {
    return (
      <div className="main-page">
        <div className="ranking">
          <Leaderboard event_name={this.state.event}/>
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
                  return <ScoreCard judge={item.judge_id} score={item.score}/>;
                })}
              </div>
              <div id="card-container2">
                {this.state.question.map(item => {
                  return <ScoreCard judge={item.judge_id} score={item.score}/>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
