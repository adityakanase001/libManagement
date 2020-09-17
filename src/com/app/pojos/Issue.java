package com.app.pojos;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "issue")
public class Issue 
{
	private Integer iid;
	
	@JsonIgnore
	private User user_id;
	
	
	@JsonFormat(pattern="yyyy-MM-dd",timezone = "IST")
	private Date issue_date;
	
	@JsonFormat(pattern="yyyy-MM-dd",timezone = "IST")
	private Date due_date;
	private Integer book_id;
	//private Set<Book> issued_books = new HashSet<Book>();
	
	public Issue() {
		// TODO Auto-generated constructor stub
	}

	public Issue(Date issue_date, Date due_date) {
		super();
		this.issue_date = issue_date;
		this.due_date = due_date;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "issue_id")
	public Integer getIid() {
		return iid;
	}
	public void setIid(Integer iid) {
		this.iid = iid;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "issue_date")
	public Date getIssue_date() {
		return issue_date;
	}
	public void setIssue_date(Date issue_date) {
		this.issue_date = issue_date;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "due_date")
	public Date getDue_date() {
		return due_date;
	}
	public void setDue_date(Date due_date) {
		this.due_date = due_date;
	}
	
	

//	@ManyToMany(mappedBy = "issues")
//	public Set<Book> getIssued_books() {
//		return issued_books;
//	}
//	public void setIssued_books(Set<Book> issued_books) {
//		this.issued_books = issued_books;
//	}

	

	@ManyToOne
	@JoinColumn(name = "user_id")
	public User getUser_id() {
		return user_id;
	}
	public Integer getBook_id() {
		return book_id;
	}


	@Column(name = "book_id")
	public void setUser_id(User user_id) {
		this.user_id = user_id;
	}
	public void setBook_id(Integer book_id) {
		this.book_id = book_id;
	}


	@Override
	public String toString() {
		return "Issue [iid=" + iid + ", issue_date=" + issue_date
				+ ", due_date=" + due_date + "]";
	}
	
//	public void addBookInIssueRecord(Book b)
//	{
//		this.book = b;
//	}
}
