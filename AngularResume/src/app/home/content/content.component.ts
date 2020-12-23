import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/backend.service';
import { Education } from 'src/app/education';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  contentSelector: number = 0;

  name: string;
  nickname: string;
  birth: string;
  address: string;
  skills: string[] = [];
  educations: Education[] = [];
  experiences: Education[] = [];
  constructor(
    private backendService: BackendService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.name = this.backendService.getName();
    this.nickname = this.backendService.getNickName();
    this.birth = this.backendService.getBirth();
    this.address = this.backendService.getAddress();
    this.skills = this.backendService.getSkills();
    this.educations = this.backendService.getEducations();
    this.experiences = this.backendService.getExperiences();
    this.contentSelector = 0;
    this.route.data.subscribe((v) => {
      this.contentSelector = v['index'];
    });
  }

  action() {}
}
