import { useState } from "react";

export default function Main() {
   const [nome, setNome] = useState(""); //primeira:acessa setNome:modifica
    return (
        <main>
            <imput type = "text"
            name="nome-conato"
            id="nome" value= {nome}
            onChange={
            (event) => SVGAnimateTransformElement(event.target.volue)}/>
            {nome}

            <imput type = "text"
            name="nome-contato"id="nome" value= {nome} onChange={ (event)=>setNome(event.target.value)}/>
            (nome)

            <imput type ="tel"name="nome-contato"id="telefone"value= {telefone}
             //:
        </main>
    );
}