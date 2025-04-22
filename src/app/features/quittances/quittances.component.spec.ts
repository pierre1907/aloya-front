import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuittancesComponent } from './quittances.component';

describe('QuittancesComponent', () => {
  let component: QuittancesComponent;
  let fixture: ComponentFixture<QuittancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuittancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuittancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
