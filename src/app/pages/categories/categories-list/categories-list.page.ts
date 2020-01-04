import { Component, OnInit } from '@angular/core';

//Hell
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.page.html',
  styleUrls: ['./categories-list.page.scss'],
})
export class CategoriesListPage implements OnInit {

  constructor(
    private router: Router
  ) {
    //CODE...
  }

  ngOnInit() {
    //CODE...
  }

  onClickAdd(){
    this.router.navigate(['/categories-add']);
  }

}
