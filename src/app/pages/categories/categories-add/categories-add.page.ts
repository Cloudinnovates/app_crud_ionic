import { Component, OnInit } from '@angular/core';

//Hell
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.page.html',
  styleUrls: ['./categories-add.page.scss'],
})
export class CategoriesAddPage implements OnInit {

  name: string = "";
  description: string = "";

  constructor(
    private service: CategoriesService,
    private router: Router,    
  ) {
    //CODE...
  }

  ngOnInit() {
    //CODE...
  }

  onClickAdd(){
    return new Promise(resolver => {
      let dados = {
        aksi: 'add',
        name: this.name,
        description: this.description
      };
      this.service.postCategory(dados)
        .then(data => {
          this.router.navigate(['/categories-list']);
          console.log('Success, Cadastrado com sucesso!');        
      })
    });
  }

}
