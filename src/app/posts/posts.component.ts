import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NihDataService } from '../nih-data.service';
import { CustomValidators } from '../validators';
import { Observable, of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$: Observable<any>;
  addPost: FormGroup;
  createClicked: boolean = false;
  constructor(private formBuilder: FormBuilder, private nihDataService: NihDataService) { }

  ngOnInit() {
    this.getPosts();
  }

  onSubmit(post) {
    this.nihDataService.addPost(post)
      .subscribe( data => {
        if(data && data.hasOwnProperty('id')){
          // This is not updating the list
          // this.getPosts();
          alert('Yay! the post has been created with the title - '+ post.title );
          return;
        } 
        alert('There was an error processing your request');
      });
  }

  initForm() {
    this.createClicked = true;
    this.addPost = this.formBuilder.group({
      title: ['', [Validators.required, 
                  Validators.maxLength(24),
                  CustomValidators.alphaNumber()]],
      body: ['', [Validators.required,
                 Validators.maxLength(50)]]
    });
  }

  getPosts() {
    const http$: Observable<any> = this.nihDataService.getPosts();
    this.posts$ = http$
    .pipe(
      map(r => r),
      catchError(err => of([]))
    )
    
    
  }

}
