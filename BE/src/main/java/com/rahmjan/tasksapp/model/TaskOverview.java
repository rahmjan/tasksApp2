package com.rahmjan.tasksapp.model;

import java.util.UUID;

public interface TaskOverview {

    UUID getUuid();
    String getName();
    String getShortDescription();

}
