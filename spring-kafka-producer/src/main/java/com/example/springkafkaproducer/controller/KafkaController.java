package com.example.springkafkaproducer.controller;

import com.example.springkafkaproducer.model.Message;
import com.example.springkafkaproducer.model.Topic;
import com.example.springkafkaproducer.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class KafkaController {

    @Autowired
    KafkaProducerService kafkaProducerService;
    @Autowired
    private DatabaseService service;
    @Autowired
    private TopicCreateService topicservice;
    @Autowired
     private ListTopicService listservice;

    // publish message
    @PostMapping("/publish")
    public String publishMessage(@RequestBody Message msg){
        kafkaProducerService.sendMessage(msg);
       service.saveMessage(msg);
        return "your record is saved successfully";
    }

  //for create topic
    @PostMapping("/topic")
    public String createTopic(@RequestBody Topic topic)
    {
        topicservice.createTopic(topic.getName(),topic.getPartition());
        return topic.getName() +  " created!";
    }
    //view kafka topics
    @GetMapping("/Alltopics")
    public Set<String> listTopics() {
        return listservice.listTopic();
    }




   //for database
    @GetMapping("/messages")
    public List<Message> findAllMessage() {
        return service.getMessages();
    }

    @GetMapping("/messageById/{id}")
    public Message findMessageById(@PathVariable int id) {
        return service.getMessageById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteMessage(@PathVariable int id) {
        return service.deleteMessage(id);
    }
}

