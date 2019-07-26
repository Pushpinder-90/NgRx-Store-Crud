import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { 
    this.route.params.pipe(
      tap(params => console.log('CoreComponent:params',params))
    )
  }

  ngOnInit() {
    
  }

}
