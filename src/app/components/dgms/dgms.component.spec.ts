import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgmsComponent } from './dgms.component';

describe('DgmsComponent', () => {
  let component: DgmsComponent;
  let fixture: ComponentFixture<DgmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
