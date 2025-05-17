public class User {
    //Atributos(variáveis):
    public int id;
    public String nome;
    public String email;
    public String senha;
    public String cidade;
    public int idade;

    public User(){}

    public User(int id, String nome, String email, String senha, String cidade, int idade){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cidade = cidade;
        this.idade = idade;
    }
}