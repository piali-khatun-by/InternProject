package com.example.springkafkaproducer.service;

import lombok.SneakyThrows;
import org.apache.kafka.clients.admin.Admin;
import org.apache.kafka.clients.admin.DescribeTopicsResult;
import org.apache.kafka.clients.admin.TopicDescription;
import org.apache.kafka.common.TopicPartitionInfo;
import org.springframework.kafka.annotation.TopicPartition;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class TopicDescriptionService  {
   private static final String TOPIC_NAME = "myapplication";
    @SneakyThrows
   public List<TopicPartitionInfo> describeTopics() {
        Properties properties = new Properties();
        properties.put("bootstrap.servers", "127.0.0.1:9092");
        Admin admin = Admin.create(properties);
       DescribeTopicsResult describeTopicsResult = admin.describeTopics(Collections.singleton(TOPIC_NAME));
      Map<String, TopicDescription> topicDescriptionMap = describeTopicsResult.all().get();

       List<TopicPartitionInfo> topicPartitionInfoList = topicDescriptionMap.get(TOPIC_NAME).partitions();

     return topicPartitionInfoList;
    }
}