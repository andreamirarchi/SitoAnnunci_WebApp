/*
package org.example.springboot_back.service;

import org.example.springboot_back.model.Data;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class RealDataService {
    private final List<Data> dataList;

    public RealDataService() {
        this.dataList = new ArrayList<>();
        for (int i = 1; i <= 50; i++) {
            dataList.add(new Data("Dati " + i, "Descrizione " + i, new byte[]{0, 1, 2}, 100.0, 90.0, false, 45.0, "place_" + i));
        }
    }

    public List<Data> getData(int page, int size) {
        int fromIndex = page * size;
        int toIndex = Math.min(fromIndex + size, dataList.size());
        if (fromIndex >= dataList.size()) return new ArrayList<>();
        return dataList.subList(fromIndex, toIndex);
    }
}
*/