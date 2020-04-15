package com.campground.demo.controller;

import com.campground.demo.dao.ActivityDAO;
import com.campground.demo.dto.ActivityDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Rest API
@RestController
// Base root
@RequestMapping("/api")
public class ActivityController {

    // Declare ActivityDAO
    private ActivityDAO activityDAO;

    // Inject singleton object (ActivityDAO) into ActivityController
    @Autowired
    public void setActivityDAO(ActivityDAO activityDAO) {
        this.activityDAO = activityDAO;
    }

    // Get all activity list
    @GetMapping("/activity")
    public List<ActivityDTO> getPage() {
        return activityDAO.getActivityList();
    }

    // Get a activity by Id
    @GetMapping("/activity/{id}")
    public ActivityDTO getActivityById(@PathVariable("id") int id) {
        ActivityDTO activity = activityDAO.getActivityById(id);
        return activity;
    }

}
