import { Component, OnInit } from '@angular/core';

//Hell
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.page.html',
  styleUrls: ['./clients-list.page.scss'],
})
export class ClientsListPage implements OnInit {

  constructor(
    private router: Router
  ) {
    //CODE...
  }

  ngOnInit() {
    //CODE...
  }

  onClickAdd(){
    this.router.navigate(['/clients-add']);
  }

}
