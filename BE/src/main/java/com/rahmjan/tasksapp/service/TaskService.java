package com.rahmjan.tasksapp.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.rahmjan.tasksapp.entity.TaskEntity;
import com.rahmjan.tasksapp.model.TaskOverview;
import com.rahmjan.tasksapp.repository.TaskRepository;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TaskService {

    private TaskRepository taskRepository;

    public List<TaskEntity> getAllTasks() {
        return (List<TaskEntity>) taskRepository.findAll();
    }

    public List<TaskOverview> getTasksOverview() {
        return taskRepository.getTasksOverview();
    }

    public Optional<TaskEntity> getTask(UUID uuid) {
        return taskRepository.findById(uuid);
    }
    
}
