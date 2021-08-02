package com.rahmjan.tasksapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootApplication
public class TasksAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(TasksAppApplication.class, args);
		log.info("--- APP STARTED ---");
	}

}
