import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoulVideoComponent } from './soul-video.component';

describe('SoulVideoComponent', () => {
  let component: SoulVideoComponent;
  let fixture: ComponentFixture<SoulVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoulVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoulVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
