package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.IBookDao;
import com.app.pojos.Book;

@RestController
@CrossOrigin
@RequestMapping("/books")
public class BookController 
{
	@Autowired
	private IBookDao dao;
	
	@GetMapping("/allbooks")
	public ResponseEntity<?> listBooks()
	{
		System.out.println("in list books");
		List<Book> allEmps = dao.getAllBooks();
		if (allEmps.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Book>>(allEmps, HttpStatus.OK);
	}
	
	@GetMapping("/{book_id}")
	public ResponseEntity<?> getBookDetails(@PathVariable int book_id)
	{
		System.out.println("in get Book "+book_id);
		Book b = dao.getBookById(book_id);
		System.out.println(b);
		
		return new ResponseEntity<Book>(b, HttpStatus.CREATED);
	
	}
	
	@PostMapping("/update")
	public ResponseEntity<?> updateBook(@RequestBody Book book)
	{
		System.out.println(book);
		Book b = dao.updateProfile(book);
		if(b == null)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<Book>(b, HttpStatus.OK);
		
	}
	
	@DeleteMapping("/{book_id}")
	public void deleteBookDetails(@PathVariable int book_id)
	{
		System.out.println("in delete Book "+book_id);
		Book b = dao.getBookById(book_id);
		if(b !=null)
		{
			dao.deleteBook(b);
		}
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addBookDetails(@RequestBody Book b) {
		System.out.println("in add Book dtls " + b);
		try {
			return new ResponseEntity<Book>(dao.addBookDetails(b), HttpStatus.CREATED);
		} catch (RuntimeException e1) {
			e1.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/{id}/{count}")
	public ResponseEntity<?> addBookCopies(@PathVariable int id,@PathVariable int count) {
		System.out.println("Add "+count+" Copies in book Id " +id );
		try {
			return new ResponseEntity<Book>(dao.addCopies(id, count), HttpStatus.CREATED);
		} catch (RuntimeException e1) {
			e1.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/search/{word}")
	public ResponseEntity<?> searchByName(@PathVariable String word)
	{
		System.out.println(word);
		List<Book> searchedBooks = dao.searchByName(word);
		if (searchedBooks.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Book>>(searchedBooks, HttpStatus.OK);
	}
}
