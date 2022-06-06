package com.example.springkafkaproducer.service;
import com.example.springkafkaproducer.model.Topic;
import com.example.springkafkaproducer.repository.DatabaseRepository;
import com.example.springkafkaproducer.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
public class DatabaseService {
    @Autowired
    private DatabaseRepository repository;


    public Message saveMessage(Message message) {
        return repository.save(message);
    }

    public String deleteMessage(int id) {
        repository.deleteById(id);
        return "message removed !! " + id;
    }

    public List<Message> getMessages() {
        return repository.findAll();
    }


    public Message getMessageById(int id) {
        return repository.findById(id).orElse(null);
    }

}
