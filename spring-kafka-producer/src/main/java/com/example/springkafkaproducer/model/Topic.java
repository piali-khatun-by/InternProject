package com.example.springkafkaproducer.model;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Topic {
    private static String name;
    private  int partition;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}