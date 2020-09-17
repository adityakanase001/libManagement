package com.app.pojos;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "user", uniqueConstraints={@UniqueConstraint(columnNames = {"email"})})
public class User
{
	private Integer id;
	private String fName,mName,lName,email,password,phoneNo;
	@JsonFormat(pattern="yyyy-MM-dd",timezone = "IST")
	private Date dob;
	private int age;
	
	
	private int countOfIssues = 0;
	private Gender gender;
	private UserRole role;
	private double fine;
	private Membership memType;
	private Address addr;	//one to one Relation
	private List<Issue> issuedBooks = new ArrayList<Issue>(); 	//one to many relation
	private Payment isMember;	//one to one relation
	
	public User() 
	{
		System.out.println("inside user ctor");
	}

	

	public User(String fName, String mName, String lName, String email, String password, String phoneNo, Date dob,
			int age, Gender gender, UserRole role, double fine, Membership memType) {
		super();
		this.fName = fName;
		this.mName = mName;
		this.lName = lName;
		this.email = email;
		this.password = password;
		this.phoneNo = phoneNo;
		this.dob = dob;
		this.age = age;
		this.gender = gender;
		this.role = role;
		this.fine = fine;
		this.memType = memType;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}

	@Column(length = 30)
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}

	@Column(length = 30)
	public String getmName() {
		return mName;
	}
	public void setmName(String mName) {
		this.mName = mName;
	}

	@Column(length = 30)
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}

	@Column(length = 50, unique = true)
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	@Column(length = 20)
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	@Column(length = 10)
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "dob")
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}

	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}

	@Enumerated(EnumType.STRING) //this will add enum names in db
	@Column(length = 10, name = "gender")
	public Gender getGender() {
		return gender;
	}
	public void setGender(Gender gender) {
		this.gender = gender;
	}

	@Enumerated(EnumType.STRING) //this will add enum names in db
	@Column(length = 20, name = "role")
	public UserRole getRole() {
		return role;
	}
	public void setRole(UserRole role) {
		this.role = role;
	}

	public double getFine() {
		return fine;
	}
	public void setFine(double fine) {
		this.fine = fine;
	}

	@Enumerated(EnumType.STRING) //this will add enum names in db
	@Column(length = 10, name = "mem_type")
	public Membership getMemType() {
		return memType;
	}
	public void setMemType(Membership memType) {
		this.memType = memType;
	}

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	public Address getAddr() {
		return addr;
	}
	public void setAddr(Address addr) {
		this.addr = addr;
	}


	@OneToMany(mappedBy = "user_id",
			cascade = CascadeType.ALL,fetch=FetchType.EAGER, orphanRemoval = true)
	@JsonIgnore
	public List<Issue> getIssuedBooks() {
		return issuedBooks;
	}
	public void setIssuedBooks(List<Issue> issuedBooks) {
		this.issuedBooks = issuedBooks;
	}

	@OneToOne(mappedBy = "users", cascade = CascadeType.ALL)
	public Payment getIsMember() {
		return isMember;
	}
	public void setIsMember(Payment isMember) {
		this.isMember = isMember;
	}
	
	@Column(name = "issue_count")
	public int getCountOfIssues() {
		return countOfIssues;
	}

	public void setCountOfIssues(int countOfIssues) {
		this.countOfIssues = countOfIssues;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", fName=" + fName + ", mName=" + mName + ", lName=" + lName + ", email=" + email
				+ ", password=" + password + ", phoneNo=" + phoneNo + ", dob=" + dob + ", age=" + age + ", gender="
				+ gender + ", role=" + role + ", fine=" + fine + ", memType=" + memType + "]";
	}

	//helper methods
	public void makepayment(Payment p) 
	{
		this.isMember = p;
		p.setUsers(this);
	}

	public void addIssueRecord(Issue issueRecord)
	{
		this.issuedBooks.add(issueRecord);
		issueRecord.setUser_id(this);
	}

	public void removeIssueRecord(Issue issueRecord)
	{
		this.issuedBooks.remove(issueRecord);
		issueRecord.setUser_id(null);
	}
	
	
	
	
}
