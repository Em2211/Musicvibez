import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TophitsComponent } from './tophits.component';

describe('TophitsComponent', () => {
  let component: TophitsComponent;
  let fixture: ComponentFixture<TophitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TophitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TophitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
