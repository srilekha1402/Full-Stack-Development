package com.ecart.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Laptops {
	@Id
	private int id;
	private String pname;
	private int pcost;
	private String pimage;
	private int pqty;
	public Laptops() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Laptops(int id, String pname, int pcost, String pimage, int pqty) {
		super();
		this.id = id;
		this.pname = pname;
		this.pcost = pcost;
		this.pimage = pimage;
		this.pqty = pqty;
	}
	@Override
	public String toString() {
		return "Laptops [id=" + id + ", pname=" + pname + ", pcost=" + pcost + ", pimage=" + pimage + ", pqty=" + pqty
				+ "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public int getPcost() {
		return pcost;
	}
	public void setPcost(int pcost) {
		this.pcost = pcost;
	}
	public String getPimage() {
		return pimage;
	}
	public void setPimage(String pimage) {
		this.pimage = pimage;
	}
	public int getPqty() {
		return pqty;
	}
	public void setPqty(int pqty) {
		this.pqty = pqty;
	}
	
}
