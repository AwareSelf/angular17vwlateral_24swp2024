import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreactiveComponent } from './empreactive.component';

describe('EmpreactiveComponent', () => {
  let component: EmpreactiveComponent;
  let fixture: ComponentFixture<EmpreactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpreactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
