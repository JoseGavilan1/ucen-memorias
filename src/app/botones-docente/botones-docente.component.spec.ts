import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesDocenteComponent } from './botones-docente.component';

describe('BotonesDocenteComponent', () => {
  let component: BotonesDocenteComponent;
  let fixture: ComponentFixture<BotonesDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonesDocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonesDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
