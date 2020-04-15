package com.campground.demo.config;

import com.campground.demo.dao.CampGroundDAO;
import com.campground.demo.dao.CampGroundDAOJpa;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CampGroundConfig {

    // Apply singleton pattern to campgroundDAO object
    @Bean
    public CampGroundDAO campGroundDAO() { return new CampGroundDAOJpa(); }

}
