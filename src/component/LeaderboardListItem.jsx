import React from 'react';

export default class LeaderboardListItem extends React.Component {
  render() {
    return (
      <div className="listItem">
        <div id="marker">_</div>
        <div id="rank">{this.props.rank}</div>
        <div id="branch">{this.props.branch}</div>
        <div className="scoreBox">
          <div id="score">{this.props.score}</div>
        </div>
      </div>
    );
  }
}
