package com.campground.demo.controller;

import com.campground.demo.dao.CampGroundDAO;
import com.campground.demo.dto.CampGroundDTO;
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
public class CampGroundController {

    // Declare CampGroundDAO
    private CampGroundDAO campGroundDAO;

    // Inject singleton object (CampGroundDAO) into CampGroundController
    @Autowired
    public void setCampGroundDAO(CampGroundDAO campGroundDAO) {
        this.campGroundDAO = campGroundDAO;
    }

    // Get all campground list
    @GetMapping("/campground")
    public List<CampGroundDTO> getPage() {
        return campGroundDAO.getCampGroundList();
    }

    // Get a campground by Id
    @GetMapping("/campground/{id}")
    public CampGroundDTO getCampGroundById(@PathVariable("id") int id) {
        CampGroundDTO campGround = campGroundDAO.getCampGroundById(id);
        return campGround;
    }

    // Search campground list
    // @PostMapping(value = "/campground/search", method = RequestMethod.POST)
    // public ResponseEntity< String > persistPerson(@RequestBody CampGroundDTO campGroundDTO) {
    // personRepository.persist(person);
    // return ResponseEntity.status(HttpStatus.CREATED).build();
    // }
}
