import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      tap(params => console.log(params[0]))
    )
  }

  onUsers(){
     this.router.navigate(['app','users']), {
      relativeTo: this.route
    };
  }

  onAddUser(){
   this.router.navigate(['app','add'])
  }
  

}
