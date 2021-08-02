package com.rahmjan.tasksapp.controller;

import java.util.List;

import com.rahmjan.tasksapp.entity.TaskEntity;
import com.rahmjan.tasksapp.model.TaskOverview;
import com.rahmjan.tasksapp.service.TaskService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@AllArgsConstructor
public class TaskController {

    private TaskService taskService;
    
    @GetMapping("/tasks-all")
    public List<TaskEntity> getAllTasks() {
        log.info("API call /tasks-all");
        return taskService.getAllTasks();
    }

    @GetMapping("/tasks")
    public List<TaskOverview> getTaskOverview() {
        log.info("API call /tasks");
        return taskService.getTasksOverview();
    }

}
