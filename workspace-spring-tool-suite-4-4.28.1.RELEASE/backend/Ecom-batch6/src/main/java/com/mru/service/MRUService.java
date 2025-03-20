package com.mru.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mru.entity.Laptops;
import com.mru.entity.Mobiles;
import com.mru.entity.Watches;
import com.mru.repo.LaptopsRepo;
import com.mru.repo.MobilesRepo;
import com.mru.repo.WatchesRepo;
@Service
public class MRUService {
	@Autowired
	private LaptopsRepo repo1;
	@Autowired
	private MobilesRepo repo2;
	@Autowired
	private WatchesRepo repo3;
	public List<Laptops> getAllLaptops(){
		return repo1.findAll();
	}
	public List<Mobiles> getAllMobiles(){
		return repo2.findAll();
	}
	public List<Watches> getAllWatches(){
		return repo3.findAll();
	}
}
