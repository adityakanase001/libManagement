package com.app.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.IUserDao;
import com.app.pojos.Book;
import com.app.pojos.Payment;
import com.app.pojos.User;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController 
{
	@Autowired
	private IUserDao dao;

	@GetMapping("/books")
	public ResponseEntity<?> listBooks()
	{
		System.out.println("in list books");
		List<Book> allEmps = dao.getBooks();
		if (allEmps.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Book>>(allEmps, HttpStatus.OK);
	}
	
	@PostMapping("/check")
	public ResponseEntity<?> checkUser(@RequestBody User u)
	{
		System.out.println("in check function of conctroller");
		User user = dao.validateUser(u.getEmail(), u.getPassword());
		if(user == null)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	@PostMapping("/changepwd/{id}")
	public ResponseEntity<?> changePassword(@PathVariable int id,@RequestBody User user)
	{
		System.out.println("id: "+id +"    new password :"+user.getPassword());
		User u = dao.changePwd(id, user.getPassword());
		if(u == null)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	@PostMapping("/update")
	public ResponseEntity<?> updateProfile(@RequestBody User user)
	{
		System.out.println(user);
		User u = dao.updateProfile(user);
		if(u == null)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<User>(user, HttpStatus.OK);
		
	}
	
	@GetMapping("/nonmembers")
	public ResponseEntity<?> getNonMembers()
	{
		System.out.println("in list non members");
		List<User> allEmps = dao.nonMembers();
		if (allEmps.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<User>>(allEmps, HttpStatus.OK);
	}
	
	@GetMapping("/members")
	public ResponseEntity<?> getMembers()
	{
		System.out.println("in list members");
		List<User> allEmps = dao.members();
		if (allEmps.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<User>>(allEmps, HttpStatus.OK);
	}
	
	@GetMapping("/admins")
	public ResponseEntity<?> getadmins()
	{
		System.out.println("in list admins");
		List<User> allEmps = dao.admins();
		if (allEmps.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<User>>(allEmps, HttpStatus.OK);
	}
	
	@GetMapping("/librarians")
	public ResponseEntity<?> getlibrarians()
	{
		System.out.println("in list librarians");
		List<User> allEmps = dao.librarians();
		if (allEmps.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<User>>(allEmps, HttpStatus.OK);
	}
	
	@GetMapping("/allusers")
	public ResponseEntity<?> getallusers()
	{
		System.out.println("in list all users");
		List<User> allEmps = dao.allUsers();
		if (allEmps.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<User>>(allEmps, HttpStatus.OK);
	}
	
	@GetMapping("/pay/{id}")
	public ResponseEntity<?> takePayment(@PathVariable int id)
	{
		//DateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
		LocalDateTime now = LocalDateTime.now();
		Payment p = new Payment();
		System.out.println(now);
		System.out.println(now.getYear());
		int yy = now.getYear();
		System.out.println(now.getMonthValue());
		int MM = now.getMonthValue();
		System.out.println(now.getDayOfMonth());
		int dd = now.getDayOfMonth();
		Date d = new Date(yy-1900,MM-1,dd);
		System.out.println(d);
		p.setPayment_date(d);
		User u = dao.takeMembership(id, p);
		if (u == null)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<User>(u, HttpStatus.OK);
	}
	
	@GetMapping("/getUserById/{id}")
	public ResponseEntity<?> getUserById(@PathVariable int id)
	{
		User u = dao.getById(id);
		if (u == null)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<User>(u, HttpStatus.OK);
	}
}
