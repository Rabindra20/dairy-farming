import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css']
})
export class StaticComponent implements OnInit {
page = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(route=>{
  this.page = route.page;
  let fileReader = new FileReader();
    //fileReader.readAsText(this.page);
    //fileReader.
    });
  }

}
