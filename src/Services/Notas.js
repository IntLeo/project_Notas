import {db} from ".SQLite"
import { transform } from "@babel/core"

export function criaTabela(){
    db.transaction((transaction) => {
    transaction.executeSql("CREATE TABLE IF NOT EXISTS" +
    "Notas "+
    "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, texto TEXT);")
})
}

export function adicionarNota(nota){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
            transaction.executeSql("INSERT INTO Notas (titulo, categoria, texto) VALUES (?,?,?);",[nota.titulo, nota.categoria, nota.texto],()=>{
                resolve("Nota adicionada com sucesso!")
            })
        })
    })
}

export function buscarNotas(){
    return new Promise((resolve) =>{
        db.transaction((transaction)=>{
            transaction.executeSql("SELECT * FROM Notas;",[], (transaction, resultado)=>{
                resolve(resultado.rows._array)
            })
        })
    })
}