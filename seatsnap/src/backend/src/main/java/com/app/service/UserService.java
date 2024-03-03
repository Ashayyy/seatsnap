package com.app.service;

import com.app.entities.User;
import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getAllUsers();
    User getUserById(Long id);
    User createUser(User user);
    User updateUser(Long id, User user);
    void deleteUser(Long id);
    Optional<User> validateUser(String username, String password);
        Long getUserIdByUsername(String username);
  
    
}
