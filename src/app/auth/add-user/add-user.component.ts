import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../users';
import { FeatureState, AddUser } from '../+state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<FeatureState>
  ) {
    this.initForm();
    }

  ngOnInit() {
    console.log('testt');
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      'enroll_id':['', Validators.required],
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'address': ['', Validators.required],
    });
  }

  onSubmit() {
    // if(this.userForm.invalid) {
    //   return;
    // }
    // console.log("Form Data : ", this.userForm.value);
    this.store.dispatch(new AddUser(this.userForm.value));
    
    this.router.navigate(['../users'], {
      relativeTo : this.route
    })
  }

}
