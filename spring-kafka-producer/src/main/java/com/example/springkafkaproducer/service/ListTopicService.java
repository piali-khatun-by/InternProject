package com.example.springkafkaproducer.service;
import lombok.SneakyThrows;
import org.apache.kafka.clients.admin.Admin;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ListTopicService {
    @SneakyThrows
    public Set<String> listTopic(){
        Properties properties = new Properties();
        properties.put("bootstrap.servers", "127.0.0.1:9092");
        Admin admin = Admin.create(properties);
        Set<String> topicNames = admin.listTopics().names().get();
        admin.close();
        return topicNames;
    }


}
