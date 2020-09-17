package com.app.dao;

import java.util.List;

import com.app.pojos.Issue;
import com.app.pojos.User;

public interface IMemberDao
{
	User addNewMember(User u);

	Issue issueBook(int uid, Issue issueRecord, int bid);
	
	Issue returnBook(int iid);
	
	List<Issue> getlistIssued();
	
	List<Issue> getIsuuesById(int id);
}
