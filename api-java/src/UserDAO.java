import java.sql.*;
import java.util.*;

public class UserDAO {

    public static void init() throws Exception {
        Connection conn = DB.connect();
        Statement stmt = conn.createStatement();
        String sql = """
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                email TEXT NOT NULL,
                senha TEXT NOT NULL,
                cidade TEXT,
                idade INTEGER
            );
        """;
        stmt.execute(sql);
        conn.close();
    }

    public static void save(User user) throws Exception {
        Connection conn = DB.connect();
        String sql = "INSERT INTO users (nome, email, senha, cidade, idade) VALUES (?, ?, ?, ?, ?)";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setString(1, user.nome);
        stmt.setString(2, user.email);
        stmt.setString(3, user.senha);
        stmt.setString(4, user.cidade);
        stmt.setInt(5, user.idade);
        stmt.execute();
        conn.close();
    }

    public static List<User> findAll() throws Exception {
        List<User> list = new ArrayList<>();
        Connection conn = DB.connect();
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT * FROM users");
        while (rs.next()) {
            list.add(new User(
                    rs.getInt("id"),
                    rs.getString("nome"),
                    rs.getString("email"),
                    rs.getString("senha"),
                    rs.getString("cidade"),
                    rs.getInt("idade")
            ));
        }
        conn.close();
        return list;
    }

    public static User findById(int id) throws Exception {
        Connection conn = DB.connect();
        String sql = "SELECT * FROM users WHERE id = ?";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setInt(1, id);
        ResultSet rs = stmt.executeQuery();
        User user = null;
        if (rs.next()) {
            user = new User(
                    rs.getInt("id"),
                    rs.getString("nome"),
                    rs.getString("email"),
                    rs.getString("senha"),
                    rs.getString("cidade"),
                    rs.getInt("idade")
            );
        }
        conn.close();
        return user;
    }

    public static void update(User user) throws Exception {
        Connection conn = DB.connect();
        String sql = "UPDATE users SET nome = ?, email = ?, senha = ?, cidade = ?, idade = ? WHERE id = ?";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setString(1, user.nome);
        stmt.setString(2, user.email);
        stmt.setString(3, user.senha);
        stmt.setString(4, user.cidade);
        stmt.setInt(5, user.idade);
        stmt.setInt(6, user.id);
        stmt.executeUpdate();
        conn.close();
    }

    public static void delete(int id) throws Exception {
        Connection conn = DB.connect();
        String sql = "DELETE FROM users WHERE id = ?";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setInt(1, id);
        stmt.executeUpdate();
        conn.close();
    }
}