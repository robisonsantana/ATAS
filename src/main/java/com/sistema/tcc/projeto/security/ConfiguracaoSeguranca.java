package com.sistema.tcc.projeto.security;

import org.apache.catalina.security.SecurityUtil;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class ConfiguracaoSeguranca {

    @Bean
    public SecurityFilterChain filterChain (HttpSecurity http) throws Exception {
        //retorno do objeto do oauth2
//        http
//            .authorizeHttpRequests(auth -> auth
//                    .requestMatchers("/").permitAll()
//                    .anyRequest().authenticated()
//            )
//            .oauth2Login(oauth -> oauth
//                    .defaultSuccessUrl("/loggingin", true)
//            );
//        return http.build();
        //retorno do objeto stateless do spring security
        return http
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                // configuração de endpoints para roles
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers(HttpMethod.POST, "/").hasRole("ADMIN")
                        .anyRequest().authenticated()
                )
                .build();
    }

}
