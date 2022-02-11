import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFoodListComponent } from './client-food-list.component';

describe('ClientFoodListComponent', () => {
  let component: ClientFoodListComponent;
  let fixture: ComponentFixture<ClientFoodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFoodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
