package com.campground.demo.dao;

import com.campground.demo.dto.ActivityDTO;

import java.util.List;

// Interface of ActivityDAO
public interface ActivityDAO {
    public List<ActivityDTO> getActivityList();
    public ActivityDTO getActivityById(int id);
}