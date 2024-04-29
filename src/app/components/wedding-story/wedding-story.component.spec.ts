import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingStoryComponent } from './wedding-story.component';

describe('WeddingStoryComponent', () => {
  let component: WeddingStoryComponent;
  let fixture: ComponentFixture<WeddingStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingStoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeddingStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
