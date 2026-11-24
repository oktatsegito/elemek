import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeriodusComponent } from './periodus-component';

describe('PeriodusComponent', () => {
  let component: PeriodusComponent;
  let fixture: ComponentFixture<PeriodusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PeriodusComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
