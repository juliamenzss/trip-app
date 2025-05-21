import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';
import { AuthgoogleService } from '../core/auth/authgoogle.service';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  profile: Profile | undefined;

  constructor(private router: Router, private googleService: AuthgoogleService){}

  navegar(){
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle(){
    this.googleService.login();
  }

 get isLoggedIn(): boolean{
    const dadosGoogle = this.googleService.getLoggedProfile()
    this.profile = dadosGoogle;
    return !!this.profile;
  }

}
