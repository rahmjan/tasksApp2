package com.rahmjan.tasksapp.repository;

import java.util.List;
import java.util.UUID;

import com.rahmjan.tasksapp.entity.TaskEntity;
import com.rahmjan.tasksapp.model.TaskOverview;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends CrudRepository<TaskEntity, UUID> {
    
    @Query("select te from TaskEntity te")
    List<TaskOverview> getTasksOverview();

}
