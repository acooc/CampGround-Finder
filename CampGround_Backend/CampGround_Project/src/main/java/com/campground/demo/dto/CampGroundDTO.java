package com.campground.demo.dto;

import java.util.Date;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
@Entity
@Table(name = "campground")
@Data
@ToString
public class CampGroundDTO {
    public CampGroundDTO() {};
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "camp_name")
    private String name;
    @Column(name = "camp_url")
    private String url;
    @Column(name = "camp_img_url")
    private String imgUrl;
    private String address;
    @Column(name = "postal_code")
    private String postalCode;
    private double lat;
    private double _long;
    @Column(name = "earliest_open_date")
    private Date earliestDate;
    @Column(name = "latest_open_date")
    private Date latestDate;
    private boolean full_season;
    private boolean overnight_site;
    private boolean roofed_lodging;
    private boolean tenting_available;
    private int total_sites;
    private int overnight_sites;
    private int seasonal_sites;
    private int max_amperage;
    private int electrical_water_sewer;
    private int electrical_water;
    private int electrical;
    private int no_services;
    private int max_length_of_rv;
    private String activities;
    private boolean accessible_facilities;
    private boolean boating;
    private boolean cable_tv;
    private boolean controlled_access;
    private boolean credit_debit_cards;
    private boolean dumping;
    private boolean group_camping;
    private boolean hot_tub;
    private boolean hotspot;
    private boolean wifi_at_site;
    private boolean laundromat;
    private boolean pet_friendly;
    private boolean planned_activities;
    private boolean playground;
    private boolean propane;
    private boolean pull_thru_sites;
    private boolean rec_hall;
    private boolean restaurant;
    private boolean store;
    private boolean indoor_pool;
    private boolean lake_river_beach;
    private boolean outdoor_pool;
    private boolean toilets_pit_outside;
    private boolean toilets_showers;
}
