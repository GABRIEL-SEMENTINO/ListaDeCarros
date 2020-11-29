import { TestBed } from '@angular/core/testing';
import { ProductsListTableService } from './products-list-service.service';


describe('ProductsListServiceService', () => {
  let service: ProductsListTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsListTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
