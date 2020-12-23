import { Injectable } from '@angular/core';
import { Education } from './education';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  name: string;
  nickName: string;
  birthDay: string;
  address: string;
  skills: string[] = [];
  educations: Education[] = [];
  experiences: Education[] = [];
  constructor() {
    this.name = 'Quisque lobortis';
    this.nickName = 'dapibus';
    this.birthDay = '14th Phasellus 2020';
    this.address =
      'Vestibulum eleifend justo leo, ac elementum diam dapibus non. Duis consequat condimentum ligula, iaculis rhoncus. 102030';
    this.skills = [
      'Suspendisse',
      'Etiam',
      'condimentum',
      'facilisis',
      'porta',
      'Vivamus',
      'ultricies',
    ];
    this.educations = [
      new Education(2005, 2010, 'tincidunt', 'Suspendisse et risus sodales'),
      new Education(2010, 2015, 'vestibulum', 'Maecenas eleifend eu arcu'),
      new Education(2015, 2020, 'porttitor', 'ivamus ipsum nisl, viverra sit'),
    ];
    this.experiences = [
      new Education(2015, 2016, 'tincidunt', 'Suspendisse et risus sodales'),
      new Education(2016, 2017, 'vestibulum', 'Maecenas eleifend eu arcu'),
      new Education(2017, 2018, 'porttitor', 'ivamus ipsum nisl, viverra sit'),
      new Education(
        2018,
        2019,
        'volutpat',
        'suscipit non viverra non, scelerisque quis orci.'
      ),
      new Education(
        2019,
        2020,
        'imperdiet',
        'Cras vitae diam sed ipsum laoreet finibus at in augue.'
      ),
    ];
  }
  getName() {
    return this.name;
  }

  getNickName() {
    return this.nickName;
  }

  getBirth() {
    return this.birthDay;
  }

  getAddress() {
    return this.address;
  }

  getSkills() {
    return this.skills;
  }

  getEducations() {
    return this.educations;
  }

  getExperiences() {
    return this.experiences;
  }
}
