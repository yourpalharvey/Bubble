package com.example.Team.A.Bubble.service.implementation;

import com.example.Team.A.Bubble.dto.Users;
import com.example.Team.A.Bubble.exceptions.UsernameException;
import com.example.Team.A.Bubble.models.UsersModel;
import com.example.Team.A.Bubble.repositories.UsersRepository;
import com.example.Team.A.Bubble.service.UsersService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class UsersServiceImplementation implements UsersService {

    @NonNull
    private final UsersRepository usersRepository;

    public List<Users> getAllRecords(){
        return usersRepository.findAll();
    }

    @Override
    public Users createUser(UsersModel usersModel) {
        Users user = new Users();

        List<Users> users = usersRepository.findAll();
        if (users.stream().anyMatch(users1 -> Objects.equals(users1.getUsername(), usersModel.getUsername()))){
            throw new UsernameException("Username already exists");
        }
        user.setUsername(usersModel.getUsername());
        user.setFirstName(usersModel.getFirstName());
        user.setLastName(usersModel.getLastName());
        user.setEmail(usersModel.getEmail());
        user.setPassword(usersModel.getPassword());

        usersRepository.save(user);

        return user;
    }
}
