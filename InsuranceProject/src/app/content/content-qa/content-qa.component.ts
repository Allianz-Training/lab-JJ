import { Component, OnInit } from '@angular/core';
import { PageControllerService } from 'src/app/page-controller.service';

@Component({
  selector: 'app-content-qa',
  templateUrl: './content-qa.component.html',
  styleUrls: ['./content-qa.component.css'],
})
export class ContentQaComponent implements OnInit {
  topics: any[];
  constructor(private pageService: PageControllerService) {
    this.topics = [
      {
        q: '1.	Why should we choose your company?',
        a:
          'Our company is the less company in Thailand that provide pascal insurance for the online merchant.',
      },
      {
        q: '2. What are the differences between your company and the others?',
        a:
          'Our company provide the high insurance coverage limit for the customer.',
      },
      {
        q: '3.  How many price rates do you have? Provide in detail.',
        a: 'We have 3 price rates as 5,000, 7,000, 15,000 baht.',
      },
      {
        q: '4. Do you have any privileges or after service for customer?',
        a: 'The customer can contact to our company 24 hours.',
      },
    ];
  }

  ngOnInit(): void {
    this.pageService.setPage(2);
  }
}
