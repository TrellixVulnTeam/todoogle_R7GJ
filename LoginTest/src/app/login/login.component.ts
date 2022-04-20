import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GoogleSigninService} from "../google-signin.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'LoginTest';

  user: gapi.auth2.GoogleUser | undefined

  constructor(private signInService: GoogleSigninService, private ref : ChangeDetectorRef) {

  }

  ngOnInit(): void{
    this.signInService.observable().subscribe(user =>{
      this.user = user
      this.ref.detectChanges()
    })
  }

  signIn(){
    this.signInService.signin()
  }

  signOut(){
    this.signInService.signout()
  }
}
