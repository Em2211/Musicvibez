import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KannadasongsComponent } from './kannadasongs.component';

describe('KannadasongsComponent', () => {
  let component: KannadasongsComponent;
  let fixture: ComponentFixture<KannadasongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KannadasongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KannadasongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
