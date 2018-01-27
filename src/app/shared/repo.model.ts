import { GithubUser } from './github-user.model';

export class Repo {
    id: number;
    name: string;
    description: string;
    language: string;
    owner: GithubUser;
    score: number;
    git_url: string;
}
