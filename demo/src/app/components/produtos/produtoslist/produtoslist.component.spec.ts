import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModalRef, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProdutoslistComponent } from './produtoslist.component';
import { ProdutosService } from 'src/app/services/produtos.service';
import { of } from 'rxjs';
import { Produto } from 'src/app/models/produto';
import { By } from '@angular/platform-browser';

describe('ProdutoslistComponent', () => {
  let component: ProdutoslistComponent;
  let fixture: ComponentFixture<ProdutoslistComponent>;
  let mockProdutosService: jasmine.SpyObj<ProdutosService>;
  let mockNgbModal: jasmine.SpyObj<NgbModal>;

  beforeEach(() => {
    mockProdutosService = jasmine.createSpyObj('ProdutosService', ['listAll', 'exemploErro']);
    mockNgbModal = jasmine.createSpyObj('NgbModal', ['open', 'dismissAll']);

    TestBed.configureTestingModule({
      declarations: [ProdutoslistComponent],
      providers: [
        { provide: ProdutosService, useValue: mockProdutosService },
        { provide: NgbModal, useValue: mockNgbModal },
      ],
      imports: [NgbModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoslistComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
