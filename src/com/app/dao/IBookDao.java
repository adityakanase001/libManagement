package com.app.dao;

import java.util.List;

import com.app.pojos.Book;

public interface IBookDao
{
	List<Book> getAllBooks();
	Book getBookById(int id);
	Book addBookDetails(Book b);
	Book updateProfile(Book book);
	void deleteBook(Book b);
	Book addCopies(int id, int count);
	List<Book> searchByName(String word);
}
