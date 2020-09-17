package com.app.pojos;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "book")
public class Book
{
	private Integer bid;
	private String author;
	private String isbn;
	private String title;
	public String publisher;
	private Integer noOfCopies;
	private Integer rackNo;
	//private Set<Issue> issues = new HashSet<Issue>();
	
	public Book() {
		// TODO Auto-generated constructor stub
	}

	public Book(String author, String isbn, String title, String publisher, Integer noOfCopies,
			Integer rackNo) {
		super();
		this.author = author;
		this.isbn = isbn;
		this.title = title;
		this.publisher = publisher;
		this.noOfCopies = noOfCopies;
		this.rackNo = rackNo;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "book_id")
	public Integer getBid() {
		return bid;
	}
	public void setBid(Integer bid) {
		this.bid = bid;
	}

	@Column(length = 50)
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}

	@Column(length = 50)
	public String getIsbn() {
		return isbn;
	}
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	@Column(length = 50)
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}

	@Column(length = 50)
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public Integer getNoOfCopies() {
		return noOfCopies;
	}
	public void setNoOfCopies(Integer noOfCopies) {
		this.noOfCopies = noOfCopies;
	}
	public Integer getRackNo() {
		return rackNo;
	}
	public void setRackNo(Integer rackNo) {
		this.rackNo = rackNo;
	}
	
//	@ManyToMany(cascade = {CascadeType.PERSIST , CascadeType.MERGE})
//	@JsonIgnore
//	@JoinTable(name = "issue_books", joinColumns = @JoinColumn(name="book_id"), inverseJoinColumns = @JoinColumn(name = "issue_id"))
//	public Set<Issue> getIssues() {
//		return issues;
//	}
//	public void setIssues(Set<Issue> issues) {
//		this.issues = issues;
//	}

	@Override
	public String toString() {
		return "Book [bid=" + bid + ", author=" + author + ", isbn=" + isbn + ", title=" + title + ", publisher="
				+ publisher + ", noOfCopies=" + noOfCopies + ", rackNo=" + rackNo + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((title == null) ? 0 : title.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Book other = (Book) obj;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		return true;
	}
}
