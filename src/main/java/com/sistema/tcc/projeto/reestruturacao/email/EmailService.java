package com.sistema.tcc.projeto.reestruturacao.email;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    //metodo que faz o envio do email
    public void enviarEmail(Email email){
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom(email.getFrom());
        msg.setTo(email.getTo());
        msg.setSubject(email.getSubject());
        msg.setText(email.getBody());
        mailSender.send(msg);
    }
}
