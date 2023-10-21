import { NextResponse } from "next/server"

const modeloCamisa = [
    {id:1, modelo: "regata", cor: "vermelho"},
    {id:1, modelo: "polo", cor: "azul"},
    {id:1, modelo: "social", cor: "amarelo"},
    {id:1, modelo: "social", cor: "amarelo"},
]

export async function GET() {
    return NextResponse.json(modeloCamisa)
}
