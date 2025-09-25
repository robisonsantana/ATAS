<div align="center">
  <img src="https://github.com/user-attachments/assets/66281ed3-a2bd-4aff-81e8-ce24f879843c" alt="Logo Systema" width=300">
</div>
<br>
Sistema de gerenciamento de editais de ampliação de carga horária para professores do Centro Paula Souza (Fatecs).

Observações:
<br>
Configurar o java para o 17 <br>
Instalar Lombok <br>
Criar instancia MySQL com senha 1234 <br>

Telas no figma: https://www.figma.com/design/DmX5rYPacwfhIaz0NVHhCi/Untitled?node-id=0-1&m=dev&t=bxBhNMdngWjRTYqY-1 <br>

Diagrama de Classes: https://drive.google.com/file/d/1QbrlJJUylnZVoqgqNSV2FAqAnZcvQ7vU/view?usp=sharing <br>

comandos instalação angular: <br> 
sudo apt install npm -y <br>
npm install <br>
npm install -g @angular/cli <br>

angular = http://localhost:4200/ <br>

rotas do angular configuradas com tela: <br>
- http://localhost:4200/login
- http://localhost:4200/register
- http://localhost:4200/dashboard
- http://localhost:4200/cadastro-disciplinas
- http://localhost:4200/solicitar-edital
- http://localhost:4200/editar-ata
- http://localhost:4200/montar-banca

comandos pra não esquecer: <br>
npm run start <br>
ng generate component /components/... <br>

java = http://localhost:8080/ <br>

Próximos passos:
- configurar api de conexao back com front

<br>

# Arquitetura Monolítica

## Diagrama da Arquitetura

```
    A[Angular Component] --> B[Angular Service]
    B --> C[HTTP Interceptor]
    C --> D[HTTP Request]
    D --> E[Load Balancer/Proxy]
    E --> F[Spring Boot Filter]
    F --> G[Spring Controller]
    G --> H[Service Layer]
    H --> I[Repository/Database]
```

### 1. **Angular Component**
- **Responsabilidade**: Interface do usuário e interações
- **Função**: Captura eventos do usuário e exibe dados
- **Tecnologia**: Angular TypeScript
- **Exemplo**: Formulários, listas, botões

### 2. **Angular Service**
- **Responsabilidade**: Lógica de comunicação HTTP
- **Função**: Abstrai chamadas para API e gerencia estado
- **Tecnologia**: Angular HttpClient
- **Exemplo**: `ProductService`, `AuthService`

### 3. **HTTP Interceptor**
- **Responsabilidade**: Middleware de requisições HTTP
- **Função**: Adiciona headers, tokens, logs automaticamente
- **Tecnologia**: Angular HttpInterceptor
- **Exemplo**: Autenticação JWT, loading, tratamento de erros

### 4. **HTTP Request**
- **Responsabilidade**: Transporte de dados
- **Função**: Protocolo de comunicação via HTTP/HTTPS
- **Tecnologia**: HTTP Protocol + JSON
- **Exemplo**: GET, POST, PUT, DELETE requests

### 5. **Load Balancer/Proxy**
- **Responsabilidade**: Distribuição e roteamento de tráfego
- **Função**: Balanceia carga e roteia requisições
- **Tecnologia**: Nginx, HAProxy, AWS ALB
- **Exemplo**: Distribuir requisições entre múltiplas instâncias

### 6. **Spring Boot Filter**
- **Responsabilidade**: Middleware de entrada do backend
- **Função**: Processa requisições antes dos controllers
- **Tecnologia**: Java Servlet Filters
- **Exemplo**: CORS, autenticação, logging, validação

### 7. **Spring Controller**
- **Responsabilidade**: Endpoints da API REST
- **Função**: Recebe requisições HTTP e retorna respostas
- **Tecnologia**: Spring Web MVC
- **Exemplo**: `@RestController` com métodos HTTP

### 8. **Service Layer**
- **Responsabilidade**: Lógica de negócio
- **Função**: Processa regras de negócio e coordena operações
- **Tecnologia**: Spring Services (@Service)
- **Exemplo**: Validações, cálculos, orquestração

### 9. **Repository/Database**
- **Responsabilidade**: Persistência de dados
- **Função**: Acesso e manipulação de dados
- **Tecnologia**: Spring Data JPA + Database
- **Exemplo**: Consultas SQL, operações CRUD

## Fluxo de Dados

### Requisição (Frontend → Backend)
1. **Usuário** interage com **Angular Component**
2. **Component** chama método do **Angular Service**
3. **Service** faz chamada HTTP que passa pelo **HTTP Interceptor**
4. **HTTP Request** é enviada através da rede
5. **Load Balancer** direciona para instância do backend
6. **Spring Filter** processa a requisição
7. **Controller** recebe e valida os dados
8. **Service Layer** executa lógica de negócio
9. **Repository** persiste/busca dados no banco

### Resposta (Backend → Frontend)
1. **Repository** retorna dados para **Service Layer**
2. **Service** processa e retorna para **Controller**
3. **Controller** serializa resposta em JSON
4. **Spring Filter** pode processar resposta
5. **Load Balancer** retorna resposta
6. **HTTP Response** volta pela rede
7. **HTTP Interceptor** pode processar resposta
8. **Angular Service** recebe e trata dados
9. **Component** atualiza interface do usuário

## Tecnologias por Camada

| Camada | Frontend | Backend |
|--------|----------|---------|
| **Apresentação** | Angular Components | Spring Controllers |
| **Serviços** | Angular Services | Spring Services |
| **Middleware** | HTTP Interceptors | Servlet Filters |
| **Comunicação** | HttpClient | HTTP Protocol |
| **Persistência** | - | Spring Data JPA |
| **Banco de Dados** | - | PostgreSQL/MySQL |

## Estrutura de Pastas

### Frontend (Angular)
```
src/app/
├── components/           # Angular Components
├── services/            # Angular Services
├── interceptors/        # HTTP Interceptors
├── models/             # TypeScript Interfaces
└── shared/             # Componentes compartilhados
```

### Backend (Spring Boot)
```
src/main/java/
├── controller/         # Spring Controllers
├── service/           # Service Layer
├── repository/        # Data Access Layer
├── model/            # JPA Entities
├── dto/              # Data Transfer Objects
└── filter/           # Servlet Filters
```

## Aspectos de Segurança

- **JWT Tokens** adicionados via HTTP Interceptors
- **CORS** configurado nos Spring Filters
- **HTTPS** para comunicação segura
- **Validação** de dados em múltiplas camadas
- **Autorização** baseada em roles


<img width="671" height="377" alt="image" src="https://github.com/user-attachments/assets/94431bbb-3dc1-4892-905a-aa0e25612182" />

Anthony, Brenda, Celline & Robison.
