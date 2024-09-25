import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIntercommunicationComponent } from './component-intercommunication.component';

describe('ComponentIntercommunicationComponent', () => {
  let component: ComponentIntercommunicationComponent;
  let fixture: ComponentFixture<ComponentIntercommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentIntercommunicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentIntercommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
