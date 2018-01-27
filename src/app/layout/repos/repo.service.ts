import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Repo } from './../../shared/repo.model';

@Injectable()
export class RepoService {

  private inMemoryRepos: Array<Repo>;
  private cachedRepos: Array<Repo>;

  constructor(private http: HttpClient) {
    this.inMemoryRepos = [];
    this.cachedRepos = [];
  }

  searchRepo(name: string) {
    return this.http.get('https://api.github.com/search/repositories', {
      params: new HttpParams().set('q', name)
    });
  }

  getRepo(owner: string, name: string) {
    return this.http.get(`https://api.github.com/repos/${owner}/${name}`);
  }

  saveRepoInMemory(repo: Repo) {
    let inMemoryRepo = this.checkRepoInMemory(repo.name);
    if (!inMemoryRepo) {
      this.inMemoryRepos.push(repo);
    } else {
      inMemoryRepo = repo;
    }
  }

  checkRepoInMemory(repoName: string) {
    return this.inMemoryRepos.find((inMemoryrepo: Repo) => inMemoryrepo.name === repoName);
  }

  cacheReposAfterSearch(repos: Array<Repo>) {
    this.cachedRepos = repos;
  }

  getCachedRepos() {
    return this.cachedRepos;
  }
}
