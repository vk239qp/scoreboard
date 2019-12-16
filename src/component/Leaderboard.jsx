import React from 'react';
import LeaderboardListItem from './LeaderboardListItem';
import firebase from '../utils/firebase';

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      event: this.props.event_name,
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref('JUDGES_COUNT/')
      .on('value', snapshot1 => {
        const judgeCount = Number(snapshot1.val());
        const dataRef = firebase.database().ref(`${this.state.event}/branches/`);
        dataRef.on('value', snapshot => {
          const dataList = [];
          console.log(snapshot);
          const dataObject = snapshot.val();
          console.log('aman', dataObject);
          // eslint-disable-next-line guard-for-in,no-restricted-syntax
          for (const branch in dataObject) {
            const singleeObj = {};
            console.log('BRANCH', branch);
            singleeObj.branch = branch;
            let i = judgeCount;
            let total = 0;
            // console.log('branch', branch)
            // eslint-disable-next-line guard-for-in,no-restricted-syntax
            for (const judge in dataObject[branch]) {
              console.log(judge);
              if (i <= 0) break;
              // eslint-disable-next-line no-plusplus
              i--;
              total += parseFloat(dataObject[branch][judge]);
            }
            singleeObj.score = total;
            dataList.push(singleeObj);
          }
          this.setState({
            data: dataList,
          });
        });
      });
  }

  render() {
    this.state.data.sort((a, b) => b.score - a.score);
    return (
      <div className="listbox">
        <div className="event-name">{this.state.event}</div>
        <div id="title">LEADERBOARD</div>

        <ul>
          {this.state.data.map((item, index) => {
            return (
              <div>
                <LeaderboardListItem rank={index + 1} branch={item.branch} score={item.score}/>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
