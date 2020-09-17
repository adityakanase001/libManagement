package com.app.dao;

import java.util.List;

import com.app.pojos.Book;
import com.app.pojos.Payment;
import com.app.pojos.User;

public interface IUserDao 
{
	User getById(int id);
	User validateUser(String email, String password);
	List<Book> getBooks();
	User changePwd(int id, String newPwd);
	User updateProfile(User user);
	List<User> nonMembers();
	List<User> members();
	List<User> admins();
	List<User> librarians();
	List<User> allUsers();
	User checkMemberForIssue(String em);
	User takeMembership(int id ,Payment p);
}
