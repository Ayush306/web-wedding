import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorygallaryComponent } from './storygallary.component';

describe('StorygallaryComponent', () => {
  let component: StorygallaryComponent;
  let fixture: ComponentFixture<StorygallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorygallaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorygallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
