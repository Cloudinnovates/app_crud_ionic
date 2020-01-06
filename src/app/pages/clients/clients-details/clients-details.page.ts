import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.page.html',
  styleUrls: ['./clients-details.page.scss'],
})
export class ClientsDetailsPage implements OnInit {

  //Atributos
  id: number;
  name: string = "";
  email: string = "";
  phone: string = "";
  created_at: string = "";
  updated_at: string = "";

  constructor(
    private router: Router, 
    private service: ClientsService,
    public toastController: ToastController,
    private actRoute: ActivatedRoute
  ) {
    //CODE...
  }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) => {
      this.id = data.id;
      this.name = data.name;
      this.phone = data.phone;
      this.email = data.email;
      this.created_at = data.created_at;
      this.updated_at = data.updated_at;
      console.log(data);
    });
  }

  //Redirecionando para a página de lista
  redirectPageClientList(){
    this.router.navigate(['/clients-list']);
  } 
    
}
