package com.example.springkafkaproducer.service;
import org.apache.kafka.clients.admin.AdminClient;
import org.apache.kafka.clients.admin.AdminClientConfig;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.stereotype.Service;


import java.util.*;

import static java.util.Arrays.asList;
@Service
public class TopicCreateService {


    public void createTopic(String topic,int partitions) {
        Properties config = new Properties();
        config.put(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");

        AdminClient admin = AdminClient.create(config);

        int replication = 1;

        admin.createTopics(asList(new NewTopic(topic,partitions, (short) replication)));
    }



}
