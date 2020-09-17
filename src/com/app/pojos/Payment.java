package com.app.pojos;
import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "payments")
public class Payment
{
	private Integer pid;
	private User users;
	private Date payment_date;
	
	public Payment() {
		// TODO Auto-generated constructor stub
	}

	public Payment(Date payment_date) {
		super();
		this.payment_date = payment_date;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "payment_id")
	public Integer getPid() {
		return pid;
	}
	public void setPid(Integer pid) {
		this.pid = pid;
	}

	@OneToOne
	@JoinColumn(name = "user_id")
	@JsonIgnore
	public User getUsers() {
		return users;
	}

	public void setUsers(User users) {
		this.users = users;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "payment_date")
	public Date getPayment_date() {
		return payment_date;
	}
	public void setPayment_date(Date payment_date) {
		this.payment_date = payment_date;
	}

	@Override
	public String toString() {
		return "Payment [pid=" + pid + ", payment_date=" + payment_date + "]";
	}
}
