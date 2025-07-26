import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParent } from './child-to-parent';

describe('ChildToParent', () => {
  let component: ChildToParent;
  let fixture: ComponentFixture<ChildToParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildToParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildToParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
