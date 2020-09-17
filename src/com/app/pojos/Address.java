package com.app.pojos;
import javax.persistence.*;

@Entity
@Table(name="user_adr")
public class Address 
{
	private Integer id;
	private String addr1,addr2,city,state,country,pinCode;
	//uni dir one to one mapping
	private User user;
	public Address() 
	{
		// TODO Auto-generated constructor stub
	}
	
	public Address(String addr1, String addr2, String city, String state, String country, String pinCode) {
		super();
		this.addr1 = addr1;
		this.addr2 = addr2;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pinCode = pinCode;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "addr_id")
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@Column(length = 100)
	public String getAddr1() {
		return addr1;
	}
	public void setAddr1(String addr1) {
		this.addr1 = addr1;
	}
	
	@Column(length = 100)
	public String getAddr2() {
		return addr2;
	}
	public void setAddr2(String addr2) {
		this.addr2 = addr2;
	}
	
	@Column(length = 30)
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	@Column(length = 30)
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	
	@Column(length = 30)
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	
	@Column(length = 10)
	public String getPinCode() {
		return pinCode;
	}
	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}
	
	@OneToOne
	@JoinColumn(name="user_id")
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Address [id=" + id + ", addr1=" + addr1 + ", addr2=" + addr2 + ", city=" + city + ", state=" + state
				+ ", country=" + country + ", pinCode=" + pinCode + "]";
	}
	
}