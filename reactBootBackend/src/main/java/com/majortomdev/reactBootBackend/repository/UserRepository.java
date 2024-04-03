package com.majortomdev.reactBootBackend.repository;

import com.majortomdev.reactBootBackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
