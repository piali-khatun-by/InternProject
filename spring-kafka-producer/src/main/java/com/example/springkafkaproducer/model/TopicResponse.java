package com.example.springkafkaproducer.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.kafka.common.Node;

import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class TopicResponse {
  private   int p;
    private Node l;
   private List<Node> r;
    private List<Node>i;

}
