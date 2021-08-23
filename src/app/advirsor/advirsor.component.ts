import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-advirsor',
  templateUrl: './advirsor.component.html',
  styleUrls: ['./advirsor.component.css']
})
export class AdvirsorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private authservice: AuthService) { }

  ngOnInit() {
  }

  show(){
    this.router.navigate(['showquestion'], { relativeTo: this.route });
  }

  suggetion(){
    this.router.navigate(['suggetion'], { relativeTo: this.route });
  }
  logout() {
    this.authservice.logoutUser();
     this.router.navigate(['/login']);
  }

}
