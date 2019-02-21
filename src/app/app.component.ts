import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  config = '';

  constructor (
    private route: ActivatedRoute
  ) {

  }

  ngOnInit (): void {
    this.config = this.route.snapshot.params['config'];
  }

}
