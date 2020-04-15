package com.campground.demo.dao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.campground.demo.dto.ActivityDTO;
import lombok.Synchronized;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.transaction.annotation.Transactional;

public class ActivityDAOJpa implements ActivityDAO {

    // Embedded JPA persistence
    @PersistenceContext
    private EntityManager em;

    // select * from ActivityDTO where id > 0
    @Override
    @Synchronized
    @Transactional
    public List<ActivityDTO> getActivityList() {
        try {
            TypedQuery<ActivityDTO> query = em.createQuery("SELECT c FROM ActivityDTO c WHERE c.id > 0", ActivityDTO.class);
            List<ActivityDTO> result = query.getResultList();
            return result;
        } catch (Exception ex) {
            em.getTransaction().rollback();
            throw ex;
        } finally {
            em.close();
        }
    }

    // select * from ActivityDTO where id = ?
    @Override
    @Synchronized
    @Transactional
    public ActivityDTO getActivityById(int id) {
        try {
            ActivityDTO activityDTO = em.find(ActivityDTO.class, id);
            return activityDTO;
        } finally {
            em.close();
        }
    }

}
