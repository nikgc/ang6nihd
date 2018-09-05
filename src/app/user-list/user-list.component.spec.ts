import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { By} from '@angular/platform-browser';
describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('.username'));
    htmlElement = debugElement.nativeElement;
    

  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('user click link should get user data and render', () => {
  //   component.userClick(1);
  //   fixture.detectChanges();
  //   expect(htmlElement.textContent).toEqual('Leanne Graham');

  // });


});
