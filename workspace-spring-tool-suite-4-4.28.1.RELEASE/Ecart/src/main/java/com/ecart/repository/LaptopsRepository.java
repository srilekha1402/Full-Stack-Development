package com.ecart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecart.entity.Laptops;
@Repository
public interface LaptopsRepository extends JpaRepository<Laptops, Integer> {
	
}
