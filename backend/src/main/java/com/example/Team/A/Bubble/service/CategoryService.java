package com.example.Team.A.Bubble.service;

import com.example.Team.A.Bubble.dto.Category;
import com.example.Team.A.Bubble.dto.Users;

import java.util.List;

public interface CategoryService {
    List<Category> getAllRecords(String search);
}
