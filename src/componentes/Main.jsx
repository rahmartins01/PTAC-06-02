import { useState } from "react";

export default function Main() {
   const [nome, setNome] = useState(""); //primeira:acessa setNome:modifica
   const [telefone, setTelefone] = useState();

   const [listaContatos, setListaContatos] = useState([]);
const registrar = (event) => {

    event.preventDefault();
    alert("React.js");

    setListaContatos([...listaContatos,
    {
        nomeSalvo: nome,
        telefoneSalvo: telefone
    }
    ]);
};

console.table(listaContatos)

    return(
        <main>
        <form action="">
            <label htmlFor="name">Nome:</label>
            <input
               type = "text"
            name="nome-conato"
            id="nome" value= {nome}
            onChange={
            (event) => setNome(event.target.value)}/>

            {nome}

            <input type ="tel"
            name="nome-contato"
            id="telefone"
            value= {telefone}
             onChange={
            (event) => setTelefone(event.target.value)}/>
          <button>
            Cadastrar
          </button>
        </main>
    );
}