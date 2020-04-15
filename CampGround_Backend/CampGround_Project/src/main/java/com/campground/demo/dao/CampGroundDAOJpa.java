package com.campground.demo.dao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.campground.demo.dto.CampGroundDTO;
import lombok.Synchronized;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.transaction.annotation.Transactional;

public class CampGroundDAOJpa implements CampGroundDAO {

    // Embedded JPA persistence
    @PersistenceContext
    private EntityManager em;

    // select * from CampGroundDTO where id > 0
    @Override
    @Synchronized
    @Transactional
    public List<CampGroundDTO> getCampGroundList() {
        try {
            TypedQuery<CampGroundDTO> query = em.createQuery("SELECT c FROM CampGroundDTO c WHERE c.id > 0", CampGroundDTO.class);
            List<CampGroundDTO> result = query.getResultList();
            return result;
        } catch (Exception ex) {
            em.getTransaction().rollback();
            throw ex;
        } finally {
            em.close();
        }
    }

    // select * from CampgroundDTO where id = ?
    @Override
    @Synchronized
    @Transactional
    public CampGroundDTO getCampGroundById(int id) {
        try {
            CampGroundDTO campGround = em.find(CampGroundDTO.class, id);
            return campGround;
        } finally {
            em.close();
        }
    }

//    @Override
//    @Synchronized
//    @Transactional
//    public List<CampGroundDTO> getCampGroundBySearch(int den, int bathroom, int bedroom, int min, int max, String type) {
//        try {
//            TypedQuery<BoardVO> query = em.createQuery("SELECT b FROM BoardVO b WHERE (" +
//                    "b.den = :den AND " +
//                    "b.bathroom >= :bathroom AND " +
//                    "b.bedroom >= :bedroom AND " +
//                    "(b.price >= :min AND b.price <= :max) AND " +
//                    "b.type = :type)", BoardVO.class)
//                    .setParameter("den", den)
//                    .setParameter("bathroom", bathroom)
//                    .setParameter("bedroom", bedroom)
//                    .setParameter("min", min)
//                    .setParameter("max", max)
//                    .setParameter("type", type);
//
//            List<BoardVO> result = query.getResultList();
//            List<BoardVO> copy = new ArrayList<>(result.size());
//            for( int i = 0 ; i < result.size() ; i++ )
//            {
//                copy.add( result.get( i ));
//            }
//            Collections.reverse(copy);
//            return copy;
//        } catch (Exception ex) {
//            em.getTransaction().rollback();
//            throw ex;
//        } finally {
//            em.close();
//        }
//    }
}
