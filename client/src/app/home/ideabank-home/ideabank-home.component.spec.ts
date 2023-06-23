import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeabankHomeComponent } from './ideabank-home.component';

describe('IdeabankHomeComponent', () => {
  let component: IdeabankHomeComponent;
  let fixture: ComponentFixture<IdeabankHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdeabankHomeComponent]
    });
    fixture = TestBed.createComponent(IdeabankHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
