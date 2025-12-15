package com.sweet.shop.controller;


import com.sweet.shop.model.Sweet;
import com.sweet.shop.service.SweetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sweets")
@CrossOrigin(origins = "*")
public class SweetController {

    @Autowired
    private SweetService service;


    @GetMapping
    public List<Sweet> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Sweet create(@RequestBody Sweet sweet) {
        return service.create(sweet);
    }

    @PutMapping("/{id}")
    public Sweet update(@PathVariable Long id, @RequestBody Sweet sweet) {
        return service.update(id, sweet);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "Deleted";
    }

    @PostMapping("/{id}/purchase")
    public Sweet purchase(@PathVariable Long id) {
        return service.purchase(id);
    }

    @GetMapping("/search")
    public List<Sweet> search(@RequestParam String name) {
        return service.searchByName(name);
    }

}

