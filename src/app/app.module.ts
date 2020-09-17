import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { AdminComponent } from './admin/admin.component';
import { MemberComponent } from './member/member.component';
import { PaymentComponent } from './payment/payment.component';
import { IssueComponent } from './issue/issue.component';
import { ReturnBookcopyComponent } from './return-bookcopy/return-bookcopy.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { DefaultComponent } from './default/default.component';
import { RegisterComponent } from './register/register.component';
import { RegisterbylibrarianComponent } from './registerbylibrarian/registerbylibrarian.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddressComponent } from './address/address.component';
import { LibDefaultComponent } from './lib-default/lib-default.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AddCopyComponent } from './add-copy/add-copy.component';
import { CopyComponent } from './copy/copy.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthServiceService } from './auth-service.service';
import { BookAvailabilityComponent } from './book-availability/book-availability.component';
import { MembershipComponent } from './membership/membership.component';
import { TakeMembershipComponent } from './take-membership/take-membership.component';
import { MemberToIssueComponent } from './member-to-issue/member-to-issue.component';
import { ReturnComponentComponent } from './return-component/return-component.component';
import { ListOfUserComponent } from './list-of-user/list-of-user.component';
import { IssuedListComponent } from './issued-list/issued-list.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MembooksComponent } from './membooks/membooks.component';
import { IssuePerMemberComponent } from './issue-per-member/issue-per-member.component';
import { LibsComponent } from './libs/libs.component';
import { AdminsComponent } from './admins/admins.component';

const parentModuleRoutes: Routes = [
  {path:'',component:DefaultComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
  {path:'logout',component:LogoutComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent,children:[ { path: '', component: DefaultComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'copies', component: CopyComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'finalpayment/:id', component: PaymentComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'checkBookavailability', component: BookAvailabilityComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'addcopy/:bid', component: AddCopyComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'listofbooks', component: LibDefaultComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'updatebook/:bid', component: UpdateBookComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'address', component: AddressComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'editprofile', component: EditProfileComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'contact', component: ContactComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'register', component: RegisterComponent }], canActivate:[AuthServiceService]},
  //{path:'home',component:HomeComponent,children:[ { path: 'login', component: LoginComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'payment', component: MembershipComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'issue', component: IssueComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'returnbook', component: ReturnBookcopyComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'add', component: AddComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'changePassword', component: ChangePasswordComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'registerbylibrarian', component: RegisterbylibrarianComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'contact', component: ContactComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'membertoissue/:id', component: MemberToIssueComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'listofuser', component: ListOfUserComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'issuedbooks', component: IssuedListComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'searchresults/:word', component: SearchResultsComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'about', component: AboutUsComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'membooks', component: MembooksComponent }], canActivate:[AuthServiceService]},
  {path:'home',component:HomeComponent,children:[ { path: 'listofissuedBook', component: IssuePerMemberComponent }], canActivate:[AuthServiceService]},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AddComponent,
    UpdateComponent,
    LoginComponent,
    LibrarianComponent,
    AdminComponent,
    MemberComponent,
    PaymentComponent,
    IssueComponent,
    ReturnBookcopyComponent,
    ChangePasswordComponent,
    AddAdminComponent,
    DefaultComponent,
    RegisterComponent,
    RegisterbylibrarianComponent,
    EditProfileComponent,
    AddressComponent,
    LibDefaultComponent,
    UpdateBookComponent,
    AddCopyComponent,
    CopyComponent,
    LogoutComponent,
    BookAvailabilityComponent,
    MembershipComponent,
    TakeMembershipComponent,
    MemberToIssueComponent,
    ReturnComponentComponent,
    ListOfUserComponent,
    IssuedListComponent,
    SearchResultsComponent,
    AboutUsComponent,
    MembooksComponent,
    IssuePerMemberComponent,
    LibsComponent,
    AdminsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(parentModuleRoutes),
     RouterModule.forRoot([
    //   {path:'',component:DefaultComponent},
    //   {path:'login',component:DefaultComponent},
    //   {path:'home',component:HomeComponent},
    //   {path:'contact',component:ContactComponent},
    //   {path:'add',component:AddComponent },
    //   {path:'update/:no',component:UpdateComponent},
    //   {path:'librarian',component:LibrarianComponent},
    //   {path:'admin',component:AdminComponent},
    //   {path:'member',component:MemberComponent},
    //   {path:'payment',component:PaymentComponent},
     //  {path:'home/payment',component:PaymentComponent},
    //   {path:'home/issue',component:IssueComponent},
    //   {path:'home/returnbook',component:ReturnBookcopyComponent},
    //   {path:'home/changePassword',component:ChangePasswordComponent},
    //   {path:'home/add',component:AddComponent},
     ])
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
