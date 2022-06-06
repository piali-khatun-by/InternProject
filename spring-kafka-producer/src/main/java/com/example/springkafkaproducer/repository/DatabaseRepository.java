package com.example.springkafkaproducer.repository;

import com.example.springkafkaproducer.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DatabaseRepository extends JpaRepository<Message,Integer>{


}

