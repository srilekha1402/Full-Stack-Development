package com.ecart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecart.entity.Laptops;
import com.ecart.service.LaptopService;

@RestController
public class LaptopsController {
	
	@Autowired
	private LaptopService service;
	@GetMapping("/laptops")
	public List<Laptops>getAllLaptops(){
		return service.getAllLaptops();
	}
}
