import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphdesingComponent } from './graphdesing.component';

describe('GraphdesingComponent', () => {
  let component: GraphdesingComponent;
  let fixture: ComponentFixture<GraphdesingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphdesingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphdesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
