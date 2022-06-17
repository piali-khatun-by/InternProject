package com.example.springkafkaproducer.model;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "data_tbl")
@Data
public class Message {
    @Id
    @GeneratedValue
    private int id;
    @Column(length =16000)
    private String message;
}
