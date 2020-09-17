import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  baseUrl="http://localhost:9090/trial2/user/";
  memberAddUrl="http://localhost:9090/trial2/members/add";
  bookUrl="http://localhost:9090/trial2/books/";

  constructor(public http:HttpClient) {

  }

   getData(){
    return this.http.get(this.baseUrl);
   }
   getBooks(){
     return this.http.get(this.baseUrl+"/books")
   }
   AddData(user){
     console.log(user);
    //  const formData = new FormData();
    //  formData.append("name",emp.name);
    //  formData.append("address",emp.address);
     //formData.append("image",image);
    
     return this.http.post(this.memberAddUrl  ,user);
   }

   delete(no){
    return this.http.delete(this.baseUrl+no);
   }
   getDataById(no){

    return this.http.get(this.baseUrl+"getUserById/"+no);

   }

   getBookById(no){

    return this.http.get(this.bookUrl+no);

   }
  //  update(emp,image){
  //   console.log("Updated Data: "+emp.name);
  //   const formData = new FormData();
  //   formData.append("name",emp.name);
  //   formData.append("address",emp.address);
  //   formData.append("image",image);
  //   console.log(formData);
  //   return this.http.put(`${this.baseUrl}/${emp.no}`,formData);

  //  }

  update(user)
  {
    user = this.http.post(`${this.baseUrl}/update`,user);
    sessionStorage.removeItem('user');
    sessionStorage.setItem('user',JSON.stringify(user));
    return user;
  }

  deleteBook(no){
    return this.http.delete(this.bookUrl+no);
   }

   updateBook(bookobj)
   {
     console.log(bookobj);
    bookobj = this.http.post(this.bookUrl+"/update",bookobj);
    return bookobj;

  }

  addBook(book)
  {
    console.log(book);
    return this.http.post(this.bookUrl+"add",book);
  }

  addCopies(book,count)
  {
    console.log(book);
    book = this.http.get(this.bookUrl+book.bid+"/"+count);
    return book;
  }

  changePwd(id,user)
  {
    user = this.http.post(this.baseUrl+"changepwd/"+id,user);
    return user;
  }

  getNonMembers()
  {
    return this.http.get(this.baseUrl+"nonmembers");
  }

  getMembers()
  {
    return this.http.get(this.baseUrl+"members");
  }

  payMoney(id)
  {
    return this.http.get(this.baseUrl+"pay/"+id);
  }

  issueBook(uid,bid)
  {
    console.log(uid);
    console.log(bid);
    return this.http.get("http://localhost:9090/trial2/members/issue/"+uid+"/"+bid);
  }

  getIssuedList()
  {
    return this.http.get("http://localhost:9090/trial2/members/issuedlist");
  }

  returnBook(iid)
  {
    console.log(iid);
    return this.http.get("http://localhost:9090/trial2/members/return/"+iid);
  }

  searchbyName(word)
  {
    return this.http.get(this.bookUrl+"search/"+word);
  }

  isssueListPerMember(id)
  {
    return this.http.get("http://localhost:9090/trial2/members/issuesbyid/"+id);
  }

  getLibs()
  {
    return this.http.get(this.baseUrl+"librarians");
  }

  getAdmins()
  {
    return this.http.get(this.baseUrl+"admins");
  }
}
