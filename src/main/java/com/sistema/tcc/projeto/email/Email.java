package com.sistema.tcc.projeto.email;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "email")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Email {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String from;
    private String to;
    private String subject;
    private String body;

}
