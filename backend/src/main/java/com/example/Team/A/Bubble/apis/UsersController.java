package com.example.Team.A.Bubble.apis;

import com.example.Team.A.Bubble.models.UsersModel;
import com.example.Team.A.Bubble.service.UsersService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@ResponseBody
public class UsersController {

    @NonNull
    private final UsersService usersService;

    @RequestMapping(method = RequestMethod.GET)
    public List<UsersModel> fetchAllRecords(){
        return usersService.getAllRecords().stream().map(UsersModel::new).collect(Collectors.toList());
    }
}
