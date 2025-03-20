package com.ecart.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecart.entity.Laptops;
import com.ecart.repository.LaptopsRepository;

@Service
public class LaptopService {
	
	@Autowired
	private LaptopsRepository repo;
	
	public List<Laptops>getAllLaptops(){
		return repo.findAll();
	}
}
