import Octokit from "@octokit/rest";
import config from "../config";
import Cryptr from "cryptr";

const octokit = new Octokit();

export function initiateGitHub() {
    //In the real, safe world, this should come from a db
    const cryptr = new Cryptr(config.bestKeptSecret);
    octokit.authenticate({
      type: 'oauth',
      key: cryptr.decrypt(config.key),
      secret: cryptr.decrypt(config.secret),
    });
  }

export async function getRepos() {
    const repos = await octokit.search.repos({
      q: 'stars:>1',
      sort: 'stars',
      order: 'desc',
      per_page: 100,
      page: 1
    })
    return repos;
  };

export async function getTopContributor(repo) {
    const contributors = await octokit.repos.getContributors
    (
      {
        owner: repo.owner.login,
        repo: repo.name,
        per_page: 1
      }
    );
    repo.topContributor = contributors.data[0];
    return repo;
  };


