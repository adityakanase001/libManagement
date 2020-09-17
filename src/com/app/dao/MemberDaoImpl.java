package com.app.dao;

import java.util.Date;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Book;
import com.app.pojos.Issue;
import com.app.pojos.User;

@Repository
@Transactional
public class MemberDaoImpl implements IMemberDao
{
	@Autowired
	private SessionFactory sf;

	@Override
	public User addNewMember(User u)
	{
		sf.getCurrentSession().persist(u);
		return u;
	}

	@Override
	public Issue issueBook(int uid, Issue issueRecord, int bid) 
	{
		User u = sf.getCurrentSession().get(User.class, uid);
		u.addIssueRecord(issueRecord);
		u.setCountOfIssues(u.getCountOfIssues()+1);
		Book b = sf.getCurrentSession().get(Book.class, bid);
		b.setNoOfCopies(b.getNoOfCopies()-1);
		return null;
	}
	
	@Override
	public Issue returnBook(int iid)
	{
		Date returnDate = new Date();
		Issue issue = sf.getCurrentSession().get(Issue.class, iid);
		User u = sf.getCurrentSession().get(User.class, issue.getUser_id().getId());
		u.removeIssueRecord(issue);
		u.setCountOfIssues(u.getCountOfIssues()-1);
		if(issue.getDue_date().after(returnDate))
		{
			System.out.println("aditya...");
			System.out.println(returnDate.compareTo(issue.getDue_date()));
			long diff = issue.getDue_date().getTime() - returnDate.getTime();
			int diffDays = (int)(diff / (24*60*60*1000));
			int fineDays = diffDays - 7;
			System.out.println(fineDays);
			if(fineDays > 0)
				u.setFine(fineDays*3);
		}
		Book b = sf.getCurrentSession().get(Book.class, issue.getBook_id());
		b.setNoOfCopies(b.getNoOfCopies()+1);
		return null;
	}

	@Override
	public List<Issue> getlistIssued() 
	{
		String jpql = "select i from Issue i";
		return sf.getCurrentSession().createQuery(jpql, Issue.class).getResultList();
	}

	@Override
	public List<Issue> getIsuuesById(int id) 
	{
		String jpql = "select u from User u join fetch u.issuedBooks where u.id = :id";
		User u = sf.getCurrentSession().createQuery(jpql,User.class).setParameter("id", id).getSingleResult();
		return u.getIssuedBooks();
	}
}
