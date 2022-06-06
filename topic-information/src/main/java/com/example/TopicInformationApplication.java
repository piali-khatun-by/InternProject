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
		listTopics(adminClient);
		describeTopics(adminClient);

	}

	private AdminClient getAdminClient() {
		Properties kafkaProperties = new Properties();
		kafkaProperties.put(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
		AdminClient adminClient = AdminClient.create(kafkaProperties);
		return adminClient;
	}
	private static final String TOPIC_NAME = "myapp";
	private void describeTopics(AdminClient adminClient) throws Exception {

		log.info("----- Describe topics ----");
		DescribeTopicsResult describeTopicsResult = adminClient.describeTopics(Collections.singleton(TOPIC_NAME));
		Map<String, TopicDescription> topicDescriptionMap = describeTopicsResult.all().get();

		List<TopicPartitionInfo> topicPartitionInfoList = topicDescriptionMap.get(TOPIC_NAME).partitions();
		topicPartitionInfoList.stream().forEach(topicInfo -> {
			log.info("Partitions : {}", topicInfo.partition());


		});
	}


	private void listTopics(AdminClient adminClient) throws Exception {

		log.info("-------- Topics List -------");
		Collection<TopicListing> topicList = adminClient.listTopics().listings().get();
		topicList.stream().forEach(topic -> {
			log.info("Topic Name : {} ", topic.name());
		});
	}



}
