package org.example.springboot_back.service;

import org.example.springboot_back.model.Data;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.List;
import javax.annotation.PostConstruct;

@Service
public class ProxyDataService {
    private final JdbcTemplate jdbcTemplate;
    public byte[] foto = Base64.getDecoder().decode("iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAMAAAD3JJ6EAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAACQUExURezw9O7x9eru8+Xq8fv7/Pr7+/r6+/v8/Pj4+Ofs8vP1+PH09/X3+fT2+fL1+Pn6+/n5+PT2+Oru9Pj5+vP09vLy9ens8vb3+e3v9Ort8/Dy9vz8/PDz9uzw9e3x9f7+/f39/fr7/Pz8/ff4+vX2+PT19ujt89vi7Ojs8vX2+fL099ff6ujr8Ovv9PX29////yoTnxgAAAABYktHRC8j1CARAAAACXBIWXMAAB2HAAAdhwGP5fFlAAAAB3RJTUUH6QMMEB40GTpNmAAAAFdJREFUCNcNyEcCQDAQAMANibLRg+hW7/7/POY4AMwwuRCW7YBroPT8QIYRxJioMM3yfzWaGouyqh1omBay7XqKgIaR1MT5vAD5a7Ltx3ndQBSwRyt83g/KkAYsgsmJRAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMy0xMlQxNjozMDo0MCswMDowMMQHr+sAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDMtMTJUMTY6MzA6NDArMDA6MDC1WhdXAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTAzLTEyVDE2OjMwOjUyKzAwOjAwuXonPwAAAABJRU5ErkJggg==");

    public ProxyDataService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @PostConstruct
    public void init() {
        initData();
    }

    public List<Data> getData() {
        String query = "SELECT * FROM data";
        return jdbcTemplate.query(query, (rs, rowNum) -> new Data(
                rs.getLong("id"),
                rs.getString("nome"),
                rs.getString("descrizione"),
                rs.getBytes("foto"),
                rs.getDouble("prezzoVecchio"),
                rs.getDouble("prezzoNuovo"),
                rs.getBoolean("isChanged"),
                rs.getDouble("m2"),
                rs.getString("placeId"),
                rs.getString("owner")
        ));
    }

    public void initData() {
        // Creazione della tabella se non esiste
        String createTableQuery = "CREATE TABLE IF NOT EXISTS data (" +
                "id INT AUTO_INCREMENT PRIMARY KEY, " +
                "nome VARCHAR(255), " +
                "descrizione VARCHAR(255), " +
                "foto BLOB, " +
                "prezzoVecchio DOUBLE, " +
                "prezzoNuovo DOUBLE, " +
                "isChanged BOOLEAN, " +
                "m2 DOUBLE, " +
                "placeId VARCHAR(255)," +
                "owner VARCHAR(255));";
        jdbcTemplate.execute(createTableQuery);

        /*
        // Inserimento dei dati di esempio
        String insertDataQuery = "INSERT INTO data (nome, descrizione, foto, prezzoVecchio, prezzoNuovo, isChanged, m2, placeId, owner) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        // Inserisci i dati nel database con il parametro foto
        jdbcTemplate.update(insertDataQuery,
                "Dati 1",
                "Descrizione 1",
                foto,  // Inserisci l'array di byte della foto qui
                100.0,
                90.0,
                false,
                45.0,
                "place_1",
                "an"
        );

        jdbcTemplate.update(insertDataQuery,
                "Dati 2",
                "Descrizione 2",
                foto,  // Inserisci l'array di byte della foto qui
                150.0,
                140.0,
                true,
                60.0,
                "place_2",
                "an"
        );

        jdbcTemplate.update(insertDataQuery,
                "Dati 3",
                "Descrizione 3",
                foto,  // Inserisci l'array di byte della foto qui
                150.0,
                140.0,
                true,
                60.0,
                "place_3",
                "as"
        );

        jdbcTemplate.update(insertDataQuery,
                "Dati 4",
                "Descrizione 4",
                foto,  // Inserisci l'array di byte della foto qui
                150.0,
                140.0,
                true,
                60.0,
                "place_4",
                "and"
        );

        jdbcTemplate.update(insertDataQuery,
                "Dati 5",
                "Descrizione 5",
                foto,  // Inserisci l'array di byte della foto qui
                150.0,
                140.0,
                true,
                60.0,
                "place_5",
                "and"
        );*/
    }
}