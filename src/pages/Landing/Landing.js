import React, { Component } from "react";
import Card from "../../components/Cards/Card";
import {initiateGitHub, getRepos, getTopContributor} from "../../services/GitHubService";

class Landing extends Component {

  state = {
    repos: [],
  }

  async componentDidMount() {
    this.mounted = true;
    try {
      initiateGitHub();
      getRepos().then((body) => {
        if(this.mounted) {
          this.setState({
            repos: body.data.items,
          });
        }
        body.data.items.forEach((repo, idx) => {
          getTopContributor(repo)
            .then((newRepo) => {
              body.data.items[idx] = newRepo;
              if(this.mounted) {
                this.setState({repos: body.data.items})
              }
            })
            .catch(() => {
              repo.topContributor = { login: 'Error Occurred' };
              body.data.items[idx] = repo;
              if(this.mounted) {
                this.setState({repos: body.data.items})
              }
            })
        });

      });
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="grid-container">
        {
        this.state.repos && this.state.repos.length > 0 && this.state.repos.map((repo, idx) =>
          (
            <Card
              key={repo.id}
              rank={idx + 1}
              repo={repo}>
            </Card>
          )
        )
      }
        </div>
    )
  }
}

export default Landing;
