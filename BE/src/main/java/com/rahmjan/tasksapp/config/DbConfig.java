package com.rahmjan.tasksapp.config;

import java.time.Instant;
import java.util.List;

import javax.annotation.PostConstruct;

import com.rahmjan.tasksapp.entity.TaskEntity;
import com.rahmjan.tasksapp.repository.TaskRepository;

import org.springframework.context.annotation.Configuration;

import lombok.AllArgsConstructor;

@Configuration
@AllArgsConstructor
public class DbConfig {
    
    private TaskRepository taskRepository;

    @PostConstruct
    public void init() {
        createTasks();
    }

    private void createTasks() {
        taskRepository.saveAll(
            List.of(
                TaskEntity.builder()
                    .name("Task 1")
                    .description("My best task")
                    .timeOfCreation(Instant.now())
                    .build(),
                TaskEntity.builder()
                    .name("Task 2")
                    .description("My best task number 2")
                    .timeOfCreation(Instant.now())
                    .build(),
                TaskEntity.builder()
                    .name("Some old task")
                    .description("Old old old....")
                    .timeOfCreation(Instant.parse("2010-11-30T18:35:24.00Z"))
                    .build()
            )
        );
    }

}
