import { FacebookLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component,ElementRef } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  socialUser!: SocialUser;
  isLoggedin?: boolean = undefined;
   constructor(private elementRef: ElementRef, private socialAuthService: SocialAuthService){

   }
   ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
    });
   }
   loginWithFacebook(): void {
     this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
   }

   signOut(): void {
    this.socialAuthService.signOut();
  }
  ngAfterViewInit() {

    this.elementRef.nativeElement.ownerDocument

        .body.style.backgroundColor = '#F0F8FF';

}
}
