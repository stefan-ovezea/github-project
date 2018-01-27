import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { RepoService } from './repo.service';
import { Repo } from '../../shared/repo.model';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  @ViewChild('searchRepo') searchRepo: ElementRef;
  noReposFoundMessage = '';
  searchedRepos: Array<Repo> = [];
  loading = false;

  constructor(
    private repoService: RepoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.searchedRepos = this.repoService.getCachedRepos();
    const observableInputParameter = Observable.fromEvent(this.searchRepo.nativeElement, 'input');
    observableInputParameter.map((event: Event) => ((<HTMLInputElement>event.target).value))
                            .debounceTime(500)
                            .subscribe((value: string) => {
                              if (value) {
                                this.searchForRepo(value);
                                this.loading = true;
                              } else {
                                this.loading = false;
                              }
                            });
  }

  searchForRepo(param: string) {
    this.repoService.searchRepo(param)
        .subscribe((githubSearchResult: any) => {
          const repos = githubSearchResult.items;
          this.searchedRepos = repos;
          if (this.searchedRepos.length > 0) {
            this.noReposFoundMessage = '';
            this.repoService.cacheReposAfterSearch(this.searchedRepos);
          } else {
            this.noReposFoundMessage = 'No repos with this name found';
          }
          this.loading = false;
        }, (error) => {
          this.noReposFoundMessage = '';
          this.loading = false;
        });
  }

  selectRepo(repo: Repo) {
    this.router.navigateByUrl(`/repos/${repo.owner.login}/${repo.name}`);
  }
}
