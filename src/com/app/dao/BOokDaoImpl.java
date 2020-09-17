package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Book;


@Repository
@Transactional
public class BOokDaoImpl implements IBookDao
{

	@Autowired
	private SessionFactory sf;
	
	@Override
	public List<Book> getAllBooks() 
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Book getBookById(int id) 
	{
		return sf.getCurrentSession().get(Book.class,id);
	}

	@Override
	public Book addBookDetails(Book b)
	{
		sf.getCurrentSession().persist(b);
		return b ;
	}

	@Override
	public Book updateProfile(Book book) {
		Book b = sf.getCurrentSession().get(Book.class,book.getBid());
		b.setAuthor(book.getAuthor());
		b.setTitle(book.getTitle());
		b.setPublisher(book.getPublisher());
		b.setIsbn(book.getIsbn());
		b.setNoOfCopies(book.getNoOfCopies());
		
		//sf.getCurrentSession().save(b);
		return b;
	}

	@Override
	public void deleteBook(Book b) {
		sf.getCurrentSession().delete(b);
		
	}

	@Override
	public Book addCopies(int id, int count)
	{
		Book b = sf.getCurrentSession().get(Book.class,id);
		b.setNoOfCopies(b.getNoOfCopies()+count);
		return b;
	}

	@Override
	public List<Book> searchByName(String word) 
	{
		String jpql = "select b from Book b where b.title = :word";
		return sf.getCurrentSession().createQuery(jpql, Book.class).setParameter("word", word).getResultList();
	}
	
}
