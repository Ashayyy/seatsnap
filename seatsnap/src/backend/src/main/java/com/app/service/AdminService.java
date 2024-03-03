package com.app.service;

import com.app.entities.Admin;
import java.util.List;
import java.util.Optional;

public interface AdminService {
    List<Admin> getAllAdmins();
    Admin getAdminById(Long id);
    Admin createAdmin(Admin admin);
    Admin updateAdmin(Long id, Admin admin);
    void deleteAdmin(Long id);
    Optional<Admin> validateAdmin(String username, String password);
}
