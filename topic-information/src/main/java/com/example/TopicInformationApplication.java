package com.example;


import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.admin.*;
import org.apache.kafka.common.TopicPartitionInfo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.*;

@Slf4j
@SpringBootApplication
public class TopicInformationApplication implements CommandLineRunner {
	public static void main(String[] args) {
		SpringApplication.run(TopicInformationApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		//Create Admin Client
		AdminClient adminClient = getAdminClient();
		// Topic information
		describeTopics(adminClient);

	}

	private AdminClient getAdminClient() {
		Properties kafkaProperties = new Properties();
		kafkaProperties.put(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
		AdminClient adminClient = AdminClient.create(kafkaProperties);
		return adminClient;
	}
	private static final String TOPIC_NAME = "test1";
	private void describeTopics(AdminClient adminClient) throws Exception {
		log.info("  ");
		log.info("----- Describe topics ----");
		log.info("  ");
		DescribeTopicsResult describeTopicsResult = adminClient.describeTopics(Collections.singleton(TOPIC_NAME));
		Map<String, TopicDescription> topicDescriptionMap = describeTopicsResult.all().get();

		List<TopicPartitionInfo> topicPartitionInfoList = topicDescriptionMap.get(TOPIC_NAME).partitions();
		topicPartitionInfoList.stream().forEach(topicInfo -> {
			log.info("Partitions : {}", topicInfo.partition());
			log.info("Leader:{}",topicInfo.leader());
			log.info("ISR:{}",topicInfo.isr());
			log.info("Replicas:{}",topicInfo.replicas());
			log.info("   ");
		});
	}


}
