package com.mru.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mru.entity.CustomerOrder;
import com.mru.entity.Laptops;
import com.mru.entity.Mobiles;
import com.mru.entity.Watches;
import com.mru.repo.OrderRepository;
import com.mru.service.MRUService;



@RestController
@CrossOrigin("*")
public class MRUController {
	@Autowired
	private MRUService service;
	@GetMapping("/laptops")
	public List<Laptops> getLaptops(){
		return service.getAllLaptops();
	}
	@GetMapping("/mobiles")
	public List<Mobiles> getMobiles(){
		return service.getAllMobiles();
	}
	@GetMapping("/watches")
	public List<Watches> getWatches(){
		return service.getAllWatches();
	}
	
	@Autowired
    private OrderRepository orderRepo;

    @PostMapping("/save-order")
    public CustomerOrder saveOrder(@RequestBody CustomerOrder order) {
        return orderRepo.save(order);
    }
    
   
    
    
    
}
