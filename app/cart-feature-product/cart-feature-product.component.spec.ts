import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFeatureProductComponent } from './cart-feature-product.component';

describe('CartFeatureProductComponent', () => {
  let component: CartFeatureProductComponent;
  let fixture: ComponentFixture<CartFeatureProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartFeatureProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartFeatureProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
