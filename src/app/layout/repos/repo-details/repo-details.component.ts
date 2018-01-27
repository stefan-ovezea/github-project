import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { RepoService } from './../repo.service';
import { Repo } from '../../../shared/repo.model';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss']
})
export class RepoDetailsComponent implements OnInit {

  repo: Repo = new Repo();
  repoForm: FormGroup;
  successMessage = '';

  constructor(
    private route: ActivatedRoute,
    private repoService: RepoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.repoForm = this.formBuilder.group({
      descriptionControl: new FormControl(''),
      languageControl: new FormControl('')
    });
    this.route.params.subscribe(param => {
      const inMemoryRepo = this.repoService.checkRepoInMemory(param.name);
      if (inMemoryRepo) {
        this.repo = inMemoryRepo;
      } else {
        this.repoService.getRepo(param.owner, param.name)
            .subscribe((repo: Repo) => {
              this.repo = repo;
            });
      }
    });
  }

  saveRepo() {
    this.repoService.saveRepoInMemory(this.repo);
    this.successMessage = 'Repo has been saved';
    setTimeout(() => {
      this.successMessage = '';
    }, 2000);
  }
}
