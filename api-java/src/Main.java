import com.sun.net.httpserver.HttpServer;

import java.net.InetSocketAddress;

public class Main {
    public static void main(String[] args) throws Exception  {
        UserDAO.init();//Cria a tabela de senao existir

        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        // Modificar o createContext de /Users para /
        server.createContext("/", new UserHandler());
        server.start();

        System.out.println("Servidor rodando em http:///localhost:8000");
    }
}
