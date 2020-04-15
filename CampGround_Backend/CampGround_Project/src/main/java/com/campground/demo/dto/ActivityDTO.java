package com.campground.demo.dto;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
@Entity
@Table(name = "activities")
@Data
@ToString
public class ActivityDTO {
    public ActivityDTO() {};
    @Id
    private int id;
    private String activity;
}
