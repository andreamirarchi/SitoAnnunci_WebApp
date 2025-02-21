import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
public class Annuncio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private byte[] foto;
    private String descrizione;
    private BigDecimal prezzoVecchio;
    private BigDecimal prezzoNuovo;
    private Boolean prezzoCambiato;
    private BigDecimal metriQuadri;
    private String posizioneGoogleMaps;
    
    @ElementCollection
    private List<String> recensioni;

    // Getters and setters
}
