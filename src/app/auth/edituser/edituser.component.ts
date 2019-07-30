import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FeatureState, EditUser, featureQuery } from '../+state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<FeatureState>
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.store.select(featureQuery.setSelectedUser).subscribe(user => {
      this.editForm.patchValue({
        enroll_id: user.enroll_id,
        username: user.username,
        password: user.password,
        address: user.address,
      });
    });
  }

  initForm() {
    this.editForm = this.formBuilder.group({
      'enroll_id': ['', Validators.required],
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'address': ['', Validators.required],
    });
  }

  onSubmit() {
    // if(this.editForm.invalid) {
    //   return;
    // }
    // console.log("Form Data : ", this.editForm.value);
    this.store.dispatch(new EditUser(this.editForm.value));

    this.router.navigate(['../users'], {
      relativeTo: this.route
    })
  }
}
