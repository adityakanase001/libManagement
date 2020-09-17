package com.app.controller;

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
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.IBookDao;
import com.app.dao.IMemberDao;
import com.app.pojos.Issue;
import com.app.pojos.User;
import com.app.pojos.UserRole;

@RestController
@CrossOrigin
@RequestMapping("/members")
public class MemberController
{
	@Autowired
	private IMemberDao dao;
	
	
	
	@PostMapping("/add")
	public ResponseEntity<?> addDetails(@RequestBody User u) 
	{
		u.setRole(UserRole.MEMBER);
		u.setFine(0);
		System.out.println("in add dtls " + u);
		System.out.println(u.getAddr());
		//System.out.println("Gender : "+ gender);

		//	    "role": "MEMBER",
//	    "fine": 0.0,
//	    "memType": "PLATINUM",
//	    "addr": null,
//	    "isMember": null
		
		try {
			return new ResponseEntity<User>(dao.addNewMember(u), HttpStatus.CREATED);
		} 
		catch (RuntimeException e1) {
			e1.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		
		}
		//return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@GetMapping("/issue/{uid}/{bid}")
	public ResponseEntity<?> issueBook(@PathVariable int uid, @PathVariable int bid)
	{
		int days = 7;
		Date d = new Date();
		System.out.println(d.getDate());
		System.out.println(d.getMonth()+1);
		System.out.println(d.getYear()+1900);
		Date dueDate = new Date();
		dueDate.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
		System.out.println(dueDate);
		Issue issueRecord = new Issue(d,dueDate);
		issueRecord.setBook_id(bid);
		Issue issued = dao.issueBook(uid,issueRecord,bid);
		if (issued == null)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<Issue>(issued, HttpStatus.OK);
	}
	
	@GetMapping("return/{iid}")
	public ResponseEntity<?> returnBook(@PathVariable int iid)
	{
		Issue issued = dao.returnBook(iid);
		return null;
//		if (issued == null)
//			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
//		return new ResponseEntity<Issue>(issued, HttpStatus.OK);
	}
	
	@GetMapping("/issuedlist")
	public ResponseEntity<?> getIssuesdList()
	{
		List<Issue> issues = dao.getlistIssued();
		if (issues.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Issue>>(issues, HttpStatus.OK);
	}
	
	@GetMapping("/issuesbyid/{id}")
	public ResponseEntity<?> getIssuedBooksById(@PathVariable int id)
	{
		List<Issue> issues = dao.getIsuuesById(id);
		if (issues.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Issue>>(issues, HttpStatus.OK);
	}
}
