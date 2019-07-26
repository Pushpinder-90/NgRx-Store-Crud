import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeatureState, featureQuery, LoadUser } from '../+state';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$ = this.store.select(featureQuery.getAllUsers);

  constructor(
    private store: Store<FeatureState>,
    private router : Router,
    private route : ActivatedRoute

  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadUser());
  }

  onEdit(){
    this.router.navigate(['../add'], {
      relativeTo: this.route
    })
  }
}
