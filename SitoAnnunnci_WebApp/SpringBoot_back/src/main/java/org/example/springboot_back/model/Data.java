package org.example.springboot_back.model;

public class Data {
    private Long id;
    private String nome;
    private String descrizione;
    private byte[] foto;
    private double prezzoVecchio;
    private double prezzoNuovo;
    private boolean isChanged;
    private double m2;
    private String placeId;
    private String owner;

    // Costruttore, getters e setters

    public Data(Long id, String nome, String descrizione, byte[] foto, double prezzoVecchio, double prezzoNuovo, boolean isChanged, double m2, String placeId, String owner) {
        this.id = id;
        this.nome = nome;
        this.descrizione = descrizione;
        this.foto = foto;
        this.prezzoVecchio = prezzoVecchio;
        this.prezzoNuovo = prezzoNuovo;
        this.isChanged = isChanged;
        this.m2 = m2;
        this.placeId = placeId;
        this.owner = owner;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public byte[] getFoto() {
        return foto;
    }

    public void setFoto(byte[] foto) {
        this.foto = foto;
    }

    public double getPrezzoVecchio() {
        return prezzoVecchio;
    }

    public void setPrezzoVecchio(double prezzoVecchio) {
        this.prezzoVecchio = prezzoVecchio;
    }

    public double getPrezzoNuovo() {
        return prezzoNuovo;
    }

    public void setPrezzoNuovo(double prezzoNuovo) {
        this.prezzoNuovo = prezzoNuovo;
    }

    public boolean isChanged() {
        return isChanged;
    }

    public void setChanged(boolean changed) {
        isChanged = changed;
    }

    public double getM2() {
        return m2;
    }

    public void setM2(double m2) {
        this.m2 = m2;
    }

    public String getPlaceId() {
        return placeId;
    }

    public void setPlaceId(String placeId) {
        this.placeId = placeId;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String placeId) {
        this.owner = owner;
    }
}