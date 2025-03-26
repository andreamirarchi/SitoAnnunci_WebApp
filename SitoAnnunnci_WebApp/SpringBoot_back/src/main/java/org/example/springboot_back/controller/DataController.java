package org.example.springboot_back.controller;

import org.example.springboot_back.model.Data;
import org.example.springboot_back.service.ProxyDataService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200") // Permette richieste da Angular
@RestController
public class DataController {
    private final ProxyDataService proxyDataService;

    public DataController(ProxyDataService proxyDataService) {
        this.proxyDataService = proxyDataService;
    }

    @GetMapping("/api/data")
    public List<Data> getData() {
        return proxyDataService.getData();
    }
}