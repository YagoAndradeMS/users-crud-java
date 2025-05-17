import com.sun.net.httpserver.*;
import java.io.*;
import java.net.URI;
import java.util.*;
import com.google.gson.*;

public class UserHandler implements HttpHandler {

    private static final Gson gson = new Gson();

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        try {
              setCorsHeaders(exchange);

            if (exchange.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
                exchange.sendResponseHeaders(204, -1);
                return;
            }

            String method = exchange.getRequestMethod();
            URI uri = exchange.getRequestURI();
            String path = uri.getPath();

            // Metodo para pegar os usuarios
            if (method.equals("GET") && path.equals("/users")) {
                List<User> users = UserDAO.findAll();
                sendResponse(exchange, 200, gson.toJson(users));
                // Metodo para pegar 1 usuario
            } else if (method.equals("GET") && path.matches("/users/\\d+")) {
                int id = Integer.parseInt(path.substring("/users/".length()));
                User user = UserDAO.findById(id);
                if (user != null) {
                    sendResponse(exchange, 200, gson.toJson(user));
                } else {
                    sendResponse(exchange, 404, "{\"error\": \"User not found\"}");
                }
                // Metodo para criar um usuario
            } else if (method.equals("POST") && path.equals("/users")) {
                User user = gson.fromJson(new InputStreamReader(exchange.getRequestBody()), User.class);
                UserDAO.save(user);
                sendResponse(exchange, 201, "{\"message\": \"User created\"}");
                // Metodo para atualizar um usuario
            } else if (method.equals("PUT") && path.matches("/users/\\d+")) {
                int id = Integer.parseInt(path.substring("/users/".length()));
                User user = gson.fromJson(new InputStreamReader(exchange.getRequestBody()), User.class);
                user.id = id;
                UserDAO.update(user);
                sendResponse(exchange, 200, "{\"message\": \"User updated\"}");
                // Metodo para deletar um usuario
            } else if (method.equals("DELETE") && path.matches("/users/\\d+")) {
                int id = Integer.parseInt(path.substring("/users/".length()));
                UserDAO.delete(id);
                sendResponse(exchange, 200, "{\"message\": \"User deleted\"}");
            } else {
                sendResponse(exchange, 404, "{\"error\": \"Endpoint not found\"}");
            }

        } catch (Exception e) {
            e.printStackTrace();
            sendResponse(exchange, 500, "{\"error\": \"Internal server error\"}");
        }
    }

    // private void sendResponse(HttpExchange exchange, int statusCode, String response) throws IOException {
    //     exchange.getResponseHeaders().add("Content-Type", "application/json");
    //     exchange.sendResponseHeaders(statusCode, response.getBytes().length);
    //     OutputStream os = exchange.getResponseBody();
    //     os.write(response.getBytes());
    //     os.close();
    // }

    private void sendResponse(HttpExchange exchange, int statusCode, String response) throws IOException {
     setCorsHeaders(exchange);
    exchange.sendResponseHeaders(statusCode, response.getBytes().length);
    OutputStream os = exchange.getResponseBody();
    os.write(response.getBytes());
    os.close();
}

private void setCorsHeaders(HttpExchange exchange) {
    Headers headers = exchange.getResponseHeaders();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
    headers.set("Content-Type", "application/json");
}

}