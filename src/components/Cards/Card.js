import React, { Component } from "react";

class Card extends Component {
  render() {
    const { repo, rank } = this.props;
    const side = rank <= 50 ? 'first-half' : 'second-half';
    return (
      <div className={"card grid-item " + side}>
        <div className='repo-rank'>{rank}</div>
        <div className="repo-title">
          <a target="_blank" href={repo ? repo.svn_url : 'Loading Repo...'}>{repo ? repo.name : ''}</a>
        </div>
        <div className="repo-stars">
          <i className="fa fa-star" aria-hidden="true"></i>
          {repo ? repo.stargazers_count : ''}
          <i className="fa fa-star" aria-hidden="true"></i>
          </div>
        <div className="top-contributor">
          <img className='avatar-img' src={
            repo &&
            repo.topContributor &&
            repo.topContributor.avatar_url ?
              repo.topContributor.avatar_url :
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuBm8iZkWaoTJ5ruwULeLtYXaExdy3SpmhqkaDkADI0XJP26oZA'}
               alt={ repo && repo.topContributor ? repo.topContributor.login : ''}
               width="30"
               height="30"/>
          <a target="_blank" className="yellow-link" href={repo && repo.topContributor ? repo.topContributor.html_url : ''}>
            {repo && repo.topContributor ? repo.topContributor.login : 'Loading Contributor....'}
            </a>
        </div>
      </div>
    )

  }
}

export default Card;
