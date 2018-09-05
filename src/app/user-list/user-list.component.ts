import { Component, OnInit } from '@angular/core';
import { NihDataService } from '../nih-data.service';
import { Observable, of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<any>;
  user$: Observable<any>;
  constructor(private nihDataService: NihDataService) { }

  ngOnInit() {
    const http$: Observable<any> = this.nihDataService.getUsers();
    this.users$ = http$
        .pipe(
          map(r => r),
          catchError(err => of([]))
        )
  }

  userClick(userId: number){
    // Question explicitly asks to fetch again
    const http$: Observable<any> = this.nihDataService.getUser(userId);
    this.user$ = http$
      .pipe(
        map(r => r),
        catchError(err => of([]))
      )
  }

}
