import { Component, OnInit } from '@angular/core';

//Hell
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.page.html',
  styleUrls: ['./login-view.page.scss'],
})
export class LoginViewPage implements OnInit {

  //Endereço URL da API
  //urlApi: string = "clients";
  urlApi: string = "clients/clients.php";
  
  //Artributos
  email : string;
  password : string;

  constructor(
    private router:Router,
    private service: ClientsService,
    private nativeStorage: NativeStorage,
    public toastController: ToastController    
  ) {
    //CODE...
  }

  ngOnInit() {
    //CODE...
  }

  async onClickLogin(){
    if(this.email == "" ){
      const toast = await this.toastController.create({
        message: 'Insert your Email',
        duration: 2000,
        color: 'warning'
      });
        
      toast.present();
      return;
    }

    if(this.password == "" ){
      const toast = await this.toastController.create({
        message: 'Insert your password',
        duration: 2000,
        color: 'warning'
      });

      toast.present();
      return;
    }


    let dados = {
      method : 'auth',
      email: this.email,
      password: this.password,     
    };

    this.service.post(dados, this.urlApi).subscribe(async data => {
     var alert = data['msg'];
     
     if(data['success']){
       this.nativeStorage.setItem('session_storage', data['result']);
       this.router.navigate(['/home-view']);
       const toast = await this.toastController.create({
         message: 'Logged with success!',
         duration: 2000,
         color: 'success'
       });
       toast.present();
       this.email = "";
       this.password = "";
       console.log(data);
     }else{
      const toast = await this.toastController.create({
        message: alert,
        duration: 2000,
        color: 'danger'
      });
      toast.present();
     }
      
    });

    }

}
