import { useState } from "react";

export default function Main() {
   const [nome, setNome] = useState(""); //primeira:acessa setNome:modifica
   const [telefone, setTelefone] = useState();

    return (
        <main>
            <input type = "text"
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
        </main>
    );
}