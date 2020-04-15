package com.campground.demo.config;

import com.campground.demo.dao.ActivityDAO;
import com.campground.demo.dao.ActivityDAOJpa;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ActivityConfig {

    // Apply singleton pattern to activityDAO object
    @Bean
    public ActivityDAO activityDAO() { return new ActivityDAOJpa(); }

}
