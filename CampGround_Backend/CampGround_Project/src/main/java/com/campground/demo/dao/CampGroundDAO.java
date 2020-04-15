package com.campground.demo.dao;

import com.campground.demo.dto.CampGroundDTO;

import java.util.List;

// Interface of CampGroundDAO
public interface CampGroundDAO {
    public List<CampGroundDTO> getCampGroundList();
    public CampGroundDTO getCampGroundById(int id);
}