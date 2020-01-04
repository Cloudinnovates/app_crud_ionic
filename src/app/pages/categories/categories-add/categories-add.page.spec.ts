import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriesAddPage } from './categories-add.page';

describe('CategoriesAddPage', () => {
  let component: CategoriesAddPage;
  let fixture: ComponentFixture<CategoriesAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
