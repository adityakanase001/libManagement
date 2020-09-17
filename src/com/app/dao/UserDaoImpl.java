package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Book;
import com.app.pojos.Membership;
import com.app.pojos.Payment;
import com.app.pojos.User;

@Repository
@Transactional
public class UserDaoImpl implements IUserDao 
{
	@Autowired
	private SessionFactory sf;

	@Override
	public User validateUser(String email, String password)
	{
		System.out.println(email+" and "+password + " inside validate DAO");
		String jpql = "select u from User u where email =:em and password =:pw";
		return sf.getCurrentSession().createQuery(jpql, User.class).setParameter("em", email).setParameter("pw", password).getSingleResult();
	}

	@Override
	public List<Book> getBooks() 
	{
		String jpql = "select b from Book b";
		return sf.getCurrentSession().createQuery(jpql, Book.class).getResultList();
	}

	@Override
	public User changePwd(int id, String newPwd)
	{
		User u = sf.getCurrentSession().get(User.class, id); // u is persistant
		u.setPassword(newPwd);
		sf.getCurrentSession().save(u);
		return u;
	}

	@Override
	public User updateProfile(User user)
	{
		System.out.println(user);
		User u = sf.getCurrentSession().get(User.class, user.getId());
		u.setAge(user.getAge());
		u.setDob(user.getDob());
		u.setGender(user.getGender());
		u.setfName(user.getfName());
		u.setmName(user.getmName());
		u.setlName(user.getlName());
		u.setPhoneNo(user.getPhoneNo());
		sf.getCurrentSession().save(u);
		return u;
	}

	@Override
	public List<User> nonMembers() 
	{
		System.out.println("inside non member list DAO");
		String jpql = "select u from User u where memType IS NULL";
		return sf.getCurrentSession().createQuery(jpql, User.class).getResultList();
	}

	@Override
	public List<User> members() {
		System.out.println("inside member list DAO");
		String jpql = "select u from User u where memType IS NOT NULL";
		return sf.getCurrentSession().createQuery(jpql, User.class).getResultList();
	}

	@Override
	public List<User> admins() {
		System.out.println("inside admin list DAO");
		String jpql = "select u from User u where role = 'ADMIN'";
		return sf.getCurrentSession().createQuery(jpql, User.class).getResultList();
	}

	@Override
	public List<User> librarians() {
		System.out.println("inside librarians list DAO");
		String jpql = "select u from User u where role = 'LIBRARIAN'";
		return sf.getCurrentSession().createQuery(jpql, User.class).getResultList();
	}

	@Override
	public List<User> allUsers() {
		System.out.println("inside all users list DAO");
		String jpql = "select u from User u";
		return sf.getCurrentSession().createQuery(jpql, User.class).getResultList();
	}

	@Override
	public User checkMemberForIssue(String em) {
		String jpql = "select u from User u where email = :em";
		return sf.getCurrentSession().createQuery(jpql, User.class).setParameter("em", em).getSingleResult();
	}

	@Override
	public User takeMembership(int id,Payment p)
	{
		User u = sf.getCurrentSession().get(User.class, id); // u is persistant
		u.setMemType(Membership.GOLD);
		u.makepayment(p);
		return u;
	}

	@Override
	public User getById(int id) 
	{
		return sf.getCurrentSession().get(User.class, id);
	}
	
	
}
