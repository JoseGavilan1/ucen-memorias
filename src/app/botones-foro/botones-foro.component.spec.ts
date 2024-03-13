import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesForoComponent } from './botones-foro.component';

describe('BotonesForoComponent', () => {
  let component: BotonesForoComponent;
  let fixture: ComponentFixture<BotonesForoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonesForoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonesForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
