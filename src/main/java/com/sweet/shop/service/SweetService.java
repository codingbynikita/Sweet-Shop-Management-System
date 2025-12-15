package com.sweet.shop.service;


import com.sweet.shop.model.Sweet;
import com.sweet.shop.repository.SweetRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SweetService {

    private final SweetRepository repo;

    public SweetService(SweetRepository repo) {
        this.repo = repo;
    }

    public List<Sweet> getAll() {
        return repo.findAll();
    }

    public Sweet create(Sweet sweet) {
        return repo.save(sweet);
    }

    public Sweet update(Long id, Sweet sweet) {
        Sweet existing = repo.findById(id).orElseThrow();

        existing.setName(sweet.getName());
        existing.setCategory(sweet.getCategory());
        existing.setPrice(sweet.getPrice());
        existing.setQuantity(sweet.getQuantity());

        return repo.save(existing);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public Sweet purchase(Long id) {
        Sweet s = repo.findById(id).orElseThrow();

        if (s.getQuantity() <= 0) {
            throw new RuntimeException("Out of stock");
        }

        s.setQuantity(s.getQuantity() - 1);

        return repo.save(s);
    }

    public List<Sweet> searchByName(String name) {
        return repo.findByNameContainingIgnoreCase(name);
    }

}
