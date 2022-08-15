package com.example.Team.A.Bubble.service.implementation;

import com.example.Team.A.Bubble.dto.Users;
import com.example.Team.A.Bubble.repositories.UsersRepository;
import com.example.Team.A.Bubble.service.UsersService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UsersServiceImplementation implements UsersService {

    @NonNull
    private final UsersRepository usersRepository;

    public List<Users> getAllRecords(){
        return usersRepository.findAll();
    }
}
